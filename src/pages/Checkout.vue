<template>
  <div class="container components-page">
    <div class="row">
      <div class="col-12">
        <div>
          <router-link to="/">Components</router-link> &middot;
          <router-link to="/checkout">Checkout</router-link>
        </div>
        <h1>Checkout</h1>
      </div>
    </div>

    <div class="row overview-screen-row">
      <transition-group name="fade" tag="div" class="col-8 tickets-container">
        <div class="ticket-container" v-for="ticket in spotlightTickets" :key="ticket.id" @click="editTicket(ticket.index)">
          <Ticket
            class="ticket"
            :class="{ 'non-spotlight-ticket': !ticket.spotlight }"
            conferenceTitle="Two Steps Forward" conferenceYear="2019"
            :personName="`${ticket.firstName} ${ticket.lastName}`" :personMeal="ticket.meal"
            :ticketType="ticket.ticket" :confirmationCode="`SB11054${ticket.id}`"
            maxWidth="300px" />
        </div>
      </transition-group>

      <div class="col-4 sidebar-container ticket-selection" v-if="!isCurrentlyEditing">
        <div class="ticket-item" v-for="(ticket, ticketIndex) in tickets" :key="ticket.id" @click="editTicket(ticketIndex)">
          <h2>{{ `${ticket.firstName} ${ticket.lastName}` }}</h2>
          {{ ticket.ticket }} &middot; {{ ticket.meal }}
        </div>
        <button class="full-width extra-margin-top secondary" @click="addTicket()">Add Another Ticket</button>
        <button class="full-width" @click="goToPayment()">Continue to Payment</button>
      </div>
      <div class="col-4 sidebar-container ticket-form" v-else>
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
        <button class="full-width secondary" @click="cancelTicket()">{{ creatingTicket ? 'Cancel' : 'Delete Ticket' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
const DEMO_MODE = true;
import Ticket from "@/components/Ticket";
export default {
  name: "CheckoutPage",
  components: { Ticket },
  data() {
    return {
      ticketIdCounter: 0,
      ticketEditIndex: -1,
      tickets: [],
      creatingTicket: false,
      showError: false
    };
  },
  mounted() {
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
  methods: {
    // Adds a new ticket and sends user to edit it.
    addTicket() {
      this.tickets.push(this.getEmptyTicket());
      this.editTicket(this.tickets.length - 1);
      this.creatingTicket = true;
    },
    // Saves changes to the currently-editing ticket, or displays error if there's a problem.
    saveTicket() {
      if(!this.currentTicketIsValid) {
        this.showError = true;
        return;
      }

      this.commitChanges();
    },
    // Deletes currently-editing ticket.
    cancelTicket() {
      this.removeTicketAtIndex(this.ticketEditIndex);
      this.commitChanges();
    },
    // Escapes user from ticket-editing interface.
    commitChanges() {
      this.showError = false;
      this.ticketEditIndex = -1;
      this.creatingTicket = false;
    },
    // Sends user to ticket-editing interface for a given ticket.
    editTicket(index) {
      this.ticketEditIndex = index;
    },
    // Deletes ticket at a given index.
    removeTicketAtIndex(index) {
      this.tickets.splice(index, 1);
    },
    // Returns an empty ticket object.
    getEmptyTicket() {
      return {
        firstName: '',
        lastName: '',
        meal: '',
        ticket: 'General Ticket',
        id: this.ticketIdCounter
      };

      this.ticketIdCounter++;
    }
  },
  computed: {
    isCurrentlyEditing() {
      return this.ticketEditIndex != -1;
    },
    currentTicket() {
      return this.tickets[this.ticketEditIndex] || {};
    },
    currentTicketIsValid() {
      if(!this.isCurrentlyEditing) {
        return true;
      }

      return !!this.currentTicket.firstName && !!this.currentTicket.lastName &&
        !!this.currentTicket.meal && this.currentTicket.ticket;
    },
    spotlightTickets() {
      if(this.isCurrentlyEditing) {
        return this.tickets
          .filter((ticket, ticketIndex) => ticketIndex == this.ticketEditIndex)
          .map(ticket => ({ ...ticket, spotlight: true }));
      }

      let result = this.tickets
        .map((ticket, ticketIndex) => ({ ...ticket, index: ticketIndex }))
        .filter((ticket, ticketIndex) => ticketIndex < 3)
        .map((ticket, ticketIndex) => ({ ...ticket, spotlight: ticketIndex == 0 }));

      if(result.length == 3) {
        result.unshift(result.pop());
      }

      return result;
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

.overview-screen-row .tickets-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;

  .ticket {
    transition: all 250ms;
    display: inline-block;
    margin-right: 10px;

    &.non-spotlight-ticket {
      opacity: 0.8;
      transform: scale(0.8);
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

.fade-enter, .fade-leave-to  {
  opacity: 0;
  transform: translateY(30px);
}
.fade-leave-active:not(.non-spotlight-ticket) {
  position: absolute;
  transition: 250ms transform, 100ms opacity;
  transform: translateY(30px);
}
.fade-move:not(.non-spotlight-ticket) {
  transition: 250ms transform, 100ms opacity;
}
</style>
