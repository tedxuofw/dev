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

    <div class="row edit-screen-row" v-if="isCurrentlyEditing">
      <div class="col-8 center-children">
        <Ticket
          conferenceTitle="Two Steps Forward" conferenceYear="2019"
          :personName="`${currentTicket.firstName} ${currentTicket.lastName}`" :personMeal="currentTicket.meal"
          :ticketType="currentTicket.ticket" :confirmationCode="`SB1105`"
          maxWidth="300px" />
      </div>
      <div class="col-4 sidebar-container ticket-form">
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

    <div class="row overview-screen-row" v-else>
      <div class="col-8 tickets-container">
        <div class="ticket-container" v-for="(ticket, ticketIndex) in spotlightTickets" :key="ticketIndex" @click="editTicket(ticket.index)">
          <Ticket
            :class="{ 'non-spotlight-ticket': !ticket.spotlight }"
            conferenceTitle="Two Steps Forward" conferenceYear="2019"
            :personName="`${ticket.firstName} ${ticket.lastName}`" :personMeal="ticket.meal"
            :ticketType="ticket.ticket" :confirmationCode="`SB1105`"
            maxWidth="300px" />
          </div>
      </div>  
      <div class="col-4 sidebar-container ticket-selection">
        <div class="ticket-item" v-for="(ticket, ticketIndex) in tickets" :key="ticketIndex" @click="editTicket(ticketIndex)">
          <h2>{{ `${ticket.firstName} ${ticket.lastName}` }}</h2>
          {{ ticket.ticket }} &middot; {{ ticket.meal }}
        </div>
        <button class="full-width extra-margin-top secondary" @click="addTicket()">Add Another Ticket</button>
        <button class="full-width" @click="goToPayment()">Continue to Payment</button>
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
          ticket: 'General Ticket'
        },
        {
          firstName: 'Jenny',
          lastName: 'Liang',
          meal: 'No Meal',
          ticket: 'General Ticket'
        },
        {
          firstName: 'Nick',
          lastName: 'Zhao',
          meal: 'No Meal',
          ticket: 'General Ticket'
        },
        {
          firstName: 'Soham',
          lastName: 'Lastname',
          meal: 'No Meal',
          ticket: 'General Ticket'
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
        ticket: 'General Ticket'
      };
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
      let result = this.tickets
        .filter((ticket, ticketIndex) => ticketIndex < 3)
        .map((ticket, ticketIndex) => ({ ...ticket, spotlight: ticketIndex == 0, index: ticketIndex }));

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

  .non-spotlight-ticket {
    opacity: 0.8;
    transform: scale(0.8);
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
</style>
