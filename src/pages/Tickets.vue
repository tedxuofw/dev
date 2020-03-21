<template>
  <div>
      <Loading v-if="this.loading"/>
      <NavBar v-bind:tickets="true"/>
      <main>
        <h1> Tickets (Closed) </h1>
        <p> Ticket purchases not available due to event closure in light of coronavirus </p>
        <p> <span class="bold"> General tickets: </span> $20, <span class="bold"> UW student tickets: </span> $15 </p>
        <p>   </p>
        <div class="col-12 outer">
          <div class="row card-row">
              <div class="col-12"> 
                  <div class="header"> Your Tickets </div>
                  <div class="card-container">
                      <div class="card-body"> 
                        <!-- TODO: Uncomment these (and the method below) and get it working with this years conference -->
                        <!-- <div @click="goToCheckout()">
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
                        </div> -->
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
import Loading from "@/components/Loading";
import CheckoutForm from "@/components/CheckoutForm";
import Confirmation from "@/components/Confirmation";
import NavBar from "@/components/NavBar";
import router from "../router";
import { user } from "../user.js";
import axios from 'axios';

export default {
  name: "CheckoutPage",
  components: { SpotlightTicketView, Ticket, CheckoutForm, NavBar, Confirmation, Loading },
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
      errorMessage: '',
      loading: false
    };
  },
  created() {
    let ticketParams = {
        token: user.getJWT(),
        event_id: 1
    };

    this.loading = true;

      let rURL = "https://students.washington.edu/tedxuofw/index.php/api/user/tickets";
      axios.get(rURL, { params: ticketParams }).then((response)  =>  {
          this.loading = false;
          var resp = response.data;
          if(resp.status === "success") {
              // Store any information given
              console.log(resp);

              // firstName, email, type
              let temp = [];
              for(var index in resp.tickets) {
                  var t = resp.tickets[index];

                  var c = "Ticket";
                  if(t.costlevel_id == 1) {
                      c = "UW Student Ticket"
                  } else if(t.costlevel_id == 2) {
                      c = "General Ticket"
                  } else if(t.costlevel_id == 11) {
                      c = "UW Student Ticket (discount)"
                  } else if(t.costlevel_id == 12) {
                      c = "General Ticket (discount)"
                  }

                  temp.push({
                      id: t.id, 
                      firstName: t.name,
                      email: t.email,
                      ticket: c
                  });
              }

              this.tickets = temp;
              console.log(this.tickets);
          } else {          
              // Error Response
              var message = resp.message;
              console.log(response.data);
          }
      }, (error)  =>  {
          this.loading = false;
          // Error with Request
          var err = error.response;
          console.log(err);

          alert("Error " + error.response.status + ": There was an error processing your request. Please contact tedxuofw@uw.edu.");
      });
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

.bold {
    font-weight: 700;
}

main {
    margin-left: 200px;
    padding: 1em 3em;
    height: 100%;
}

h1 {
    font-weight: 300;
    margin-left: 32px;
}

main > p {
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
        main, div.col-12 {
        margin-left: 0;
    }

    h1, main > p {
        margin-left: 16px;
    }
}
</style>