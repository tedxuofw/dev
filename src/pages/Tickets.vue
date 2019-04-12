<template>
  <div>
      <NavBar v-bind:tickets="true"/>
      <main>
        <h1> Tickets </h1>
        <div class="col-12">
          <div class="row card-row">
              <div class="col-12"> 
                  <div class="header"> Your Tickets </div>
                  <div class="card-container">
                      <div class="card-body"> 
                        <div @click="goToCheckout()">
                          <Ticket 
                            class="ticket"
                            conferenceTitle="Two Steps Forward" conferenceYear="2019"
                            email=''
                            maxWidth="200px"
                            ticketType='General Ticket'
                            addButton
                          />
                        </div>
                          <div class="ticket-container" v-for="ticket in tickets" :key="ticket.id" @click="onClickTicket(ticket)">
                            <Ticket
                              class="ticket"
                              conferenceTitle="Two Steps Forward" conferenceYear="2019"
                              :personName="`${ticket.firstName}`"
                              :ticketType="ticket.ticket" 
                              :email="`${ticket.email}`"
                              maxWidth="200px" />
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </main>
  </div>
</template>

<script>
const MOBILE_MAX_WIDTH = 1350;
const pageNames = ['Buy new tickets', 'Ticket payment', 'Review your purchase'];
const navNames = ['', 'tickets', 'payment']

import SpotlightTicketView from "@/components/SpotlightTicketView";
import Ticket from "@/components/Ticket";
import CheckoutForm from "@/components/CheckoutForm";
import Confirmation from "@/components/Confirmation";
import NavBar from "@/components/NavBar";
import router from "../router";

export default {
  name: "CheckoutPage",
  components: { SpotlightTicketView, Ticket, CheckoutForm, NavBar, Confirmation },
  data() {
    return {
      ticketIdCounter: 0,
      ticketEditIndex: -1,
      tickets: [],
      mobileView: false,
      // 0 = ticket selection, 1 = checkout, 2 = confirmation
      screen: 0,
      navNames: '',
      title: 'Buy new tickets',
      errorMessage: ''
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.recalculateMobileView);
    });
    this.recalculateMobileView();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.recalculateMobileView);
  },
  methods: {
    /** Returns an empty ticket object. */
    getEmptyTicket() {
      return {
        firstName: '',
        email: '',
        meal: '',
        ticket: 'General Ticket',
        id: this.ticketIdCounter
      };

      this.ticketIdCounter++;
    },

    /** Calculates whether mobileView should be enabled based on screen width. */
    recalculateMobileView() {
      this.mobileView = window.innerWidth < Number.MAX_SAFE_INTEGER;
    },

    goToCheckout() {
      router.push('/checkout');
    }
  },
  computed: {
    /**
     * Returns an array to be used with SpotlightTicketView component.
     * When editing, only the currently-selected ticket is spotlighted.
     * When editing on mobile view, no ticket is spotlighted.
     */
    spotlightTickets() {
      return this.tickets;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
main {
    margin-left: 200px;
    padding: 1em 3em;
    height: 100%;
}

h1 {
    font-weight: 300;
    margin-left: 32px;
}

.card-body {
    background-color: $color-secondary-2;
    display: flex;
    padding: 1em;
    flex-wrap: nowrap;
    overflow-x: scroll;
}

.card-child {
    width: 100%;
}

.header {
    border-bottom: 4px solid red;
    font-size: 1.25em;
    margin-bottom: 1em;
}

.card-row {
    height: 60%;
    margin-bottom: 1em;
}

.card-container {
    max-width: 100%;
    height: 85%;
}

.ticket {
  margin: 1em;
}

@media (max-width: 600px) {
    main {
        margin-left: 0;
    }

    h1 {
        margin-left: 16px;
    }
}
</style>