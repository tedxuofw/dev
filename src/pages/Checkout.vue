<template>
  <div class="container components-page" :class="{ 'mobile-view': mobileView }">
    <div class="row">
      <div class="col-12">
        <div>
          <router-link to="/">Components</router-link> &middot;
          <router-link to="/checkout">Checkout</router-link>
        </div>
        <h1>Checkout</h1>
      </div>
    </div>

    <div class="row overview-screen-row" :class="{ 'allow-wrap': mobileView }" v-if="!paymentScreen">
      <SpotlightTicketView
        :class="{ 'col-12': mobileView, 'col-8': !mobileView }"
        :tickets="spotlightTickets"
        :onClickTicket="ticket => editTicket(ticket.index)"
        :mobileView="mobileView" />

      <div class="tickets-container empty-state-container" :class="{ 'col-12': mobileView, 'col-8': !mobileView }" v-if="tickets.length == 0">
        <div class="empty-state-text">
          <p>You haven't selected any tickets to purchase yet. <a @click="addTicket()">Add a ticket now.</a></p>
        </div>
      </div>

      <div class="sidebar-container ticket-selection" :class="{ 'col-12': mobileView, 'col-4': !mobileView }" v-if="!isCurrentlyEditing">
        <div class="ticket-item" v-for="(ticket, ticketIndex) in tickets" :key="ticket.id" @click="editTicket(ticketIndex)">
          <h2>{{ `${ticket.firstName} ${ticket.lastName}` }}</h2>
          {{ ticket.ticket }} &middot; {{ ticket.meal }}
        </div>
        <button class="full-width extra-margin-top secondary" @click="addTicket()">Add Another Ticket</button>
        <button class="full-width" @click="goToPayment()" v-if="tickets.length > 0">Continue to Payment</button>
      </div>

      <div class="col-4 sidebar-container ticket-form" :class="{ 'col-12': mobileView, 'col-4': !mobileView }" v-else>
        <h2>Ticket Information</h2>
        <p class="footnote show-label">Ticket Type</p>
        <select v-model="currentTicket.ticket" class="full-width">
          <option>General Ticket</option>
          <option>UW Student Ticket</option>
        </select>

        <p class="footnote show-label">Meal Type</p>
        <select v-model="currentTicket.meal" class="full-width">
          <option disabled value="">Select a meal</option>
          <option>No Meal</option>
          <option>Vegan</option>
          <option>Non-Vegan</option>
        </select>

        <h2 class="extra-margin-top">Ticket Holder</h2>
        <p class="footnote" :class="{ 'show-label': !!currentTicket.firstName }">First Name</p>
        <input type="text" placeholder="First Name" class="full-width" v-model="currentTicket.firstName">
        <p class="footnote" :class="{ 'show-label': !!currentTicket.lastName }">Last Name</p>
        <input type="text" placeholder="Last Name" class="full-width" v-model="currentTicket.lastName">

        <p v-if="showError" class="error extra-margin-top">Make sure you've filled out all parts of the form before saving.</p>
        <button class="full-width" :class="{ 'extra-margin-top': !showError }" @click="saveTicket()">Save</button>
        <button class="full-width secondary" @click="cancelTicket()" v-if="tickets.length > 1">{{ creatingTicket ? 'Cancel' : 'Delete Ticket' }}</button>
      </div>
    </div>

    <div class="row" v-else>
      <p>Screen where you submit payment details will come soon, based on Jenny's payments work :)</p>
    </div>
  </div>
</template>

<script>
const DEMO_MODE = true;
const MOBILE_MAX_WIDTH = 1350;
import SpotlightTicketView from "@/components/SpotlightTicketView";
import Ticket from "@/components/Ticket";
export default {
  name: "CheckoutPage",
  components: { SpotlightTicketView, Ticket },
  data() {
    return {
      ticketIdCounter: 0,
      ticketEditIndex: -1,
      tickets: [],
      creatingTicket: false,
      showError: false,
      mobileView: false,
      paymentScreen: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.recalculateMobileView);
    });
    console.log('mount')
    this.recalculateMobileView();

    if(DEMO_MODE) {
      this.tickets = [
        {
          firstName: 'Andrey',
          lastName: 'Butenko',
          meal: 'No Meal',
          ticket: 'General Ticket',
          id: -4
        },
        {
          firstName: 'Jenny',
          lastName: 'Liang',
          meal: 'No Meal',
          ticket: 'General Ticket',
          id: -3
        },
        {
          firstName: 'Nick',
          lastName: 'Zhao',
          meal: 'No Meal',
          ticket: 'General Ticket',
          id: -2
        },
        {
          firstName: 'Soham',
          lastName: 'Pardeshi',
          meal: 'No Meal',
          ticket: 'General Ticket',
          id: -1
        }
      ];
      return;
    }

    this.addTicket();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.recalculateMobileView);
  },
  methods: {
    /** Adds a new ticket and switches to editing interface for new ticket. */
    addTicket() {
      this.tickets.push(this.getEmptyTicket());
      this.editTicket(this.tickets.length - 1);
      this.creatingTicket = true;
    },

    /** Saves changes to currently-editing ticket, or displays error if there's a problem */
    saveTicket() {
      if(!this.currentTicketIsValid) {
        this.showError = true;
        return;
      }

      this.commitChanges();
    },

    /** Deletes the currently-editing ticket. */
    cancelTicket() {
      this.removeTicketAtIndex(this.ticketEditIndex);
      this.commitChanges();
    },
    
    /** Exits ticket-editing interface. */
    commitChanges() {
      this.showError = false;
      this.ticketEditIndex = -1;
      this.creatingTicket = false;
      this.scrollToTop();
    },

    /** Sends user to ticket-editing interface for a given ticket. */
    editTicket(index) {
      if(this.isCurrentlyEditing) return;
      this.ticketEditIndex = index;
      this.scrollToTop();
    },
    
    /** Deletes ticket at a given index. */
    removeTicketAtIndex(index) {
      this.tickets.splice(index, 1);
    },
    
    /** Returns an empty ticket object. */
    getEmptyTicket() {
      return {
        firstName: '',
        lastName: '',
        meal: '',
        ticket: 'General Ticket',
        id: this.ticketIdCounter
      };

      this.ticketIdCounter++;
    },

    /** Scrolls to top of webpage. */
    scrollToTop() {
      window.scrollTo(0,0);
    },

    /** Calculates whether mobileView should be enabled based on screen width. */
    recalculateMobileView() {
      this.mobileView = window.innerWidth < MOBILE_MAX_WIDTH;
    },

    /** Switches to payment interface. */
    goToPayment() {
      this.paymentScreen = true;
    }
  },
  computed: {
    /** Returns whether a ticket is currently being edited. */
    isCurrentlyEditing() {
      return this.ticketEditIndex != -1;
    },

    /** Returns the currently-edited ticket. Returns an empty object if no ticket is being edited. */
    currentTicket() {
      return this.tickets[this.ticketEditIndex] || {};
    },

    /** Returns whether the currently-edited ticket is totally complete. */
    currentTicketIsValid() {
      if(!this.isCurrentlyEditing) {
        return true;
      }

      return !!this.currentTicket.firstName && !!this.currentTicket.lastName &&
        !!this.currentTicket.meal && this.currentTicket.ticket;
    },

    /**
     * Returns an array to be used with SpotlightTicketView component.
     * When editing, only the currently-selected ticket is spotlighted.
     * When editing on mobile view, no ticket is spotlighted.
     */
    spotlightTickets() {
      if(this.isCurrentlyEditing && this.mobileView) {
        return [];
      }

      if(this.isCurrentlyEditing) {
        return this.tickets
          .filter((ticket, ticketIndex) => ticketIndex == this.ticketEditIndex);
      }

      return this.tickets;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
p.callout,
p.footnote {
  margin-bottom: 0px;
  opacity: 0;
  height: 0;
  transition: 250ms all;

  &.show-label {
    opacity: 1;
    height: 1.5em;
  }
}

.sidebar-container {
  padding: 32px;
  border: 1px solid transparent;
}

.mobile-view {
  .row.overview-screen-row {
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
    width: 100%;

    .sidebar-container {
      padding: 16px;
      width: 90%;
    }

    .ticket-form {
      border: 0;
    }
  }
}

.ticket-form {
  padding: 32px;
  border: 1px solid $color-secondary;
}

.ticket-form h2 {
  padding-bottom: 0.5em;
  border-bottom: 4px solid $color-secondary;
}

.extra-margin-top {
  margin-top: 2em;
}

.center-children {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ticket-control {
  display: flex;
  flex-direction: row;

  h1 {
    flex-grow: 1;
  }
}

p.error {
  color: $color-primary;
}

.ticket-selection {
  .ticket-item {
    background-color: $color-secondary-2;
    border-left: 8px solid $color-primary;
    padding: 16px 32px;
    cursor: pointer;
    margin-bottom: 1em;

    h2 {
      margin: 0.25em 0;
    }
  }
}

.empty-state-container {
  display: flex;
  justify-content: center;
  align-items: stretch;

  .empty-state-text {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 250px;
    width: 100%;
    max-width: 300px;
    border: 1px solid black;
    box-shadow: 10px 10px 31px 0px rgba(194,194,194,1);
    padding: 16px;
  }
}
</style>
