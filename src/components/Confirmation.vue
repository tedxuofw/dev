<template>
    <div>
        <SideNavBar v-bind:tickets="true"/>
        <main>
            <div class="container components-page" :class="{ 'mobile-view': mobileView }">
                <div class="row">
                    <div class="col-12">
                        <h1>Checkout</h1>
                    </div>
                </div>

                <div class="row overview-screen-row" :class="{ 'allow-wrap': mobileView }">
                    <div class="col-8">
                        <SpotlightTicketView
                            :class="{ 'col-12': mobileView, 'col-8': !mobileView }"
                            :tickets="spotlightTickets"
                            :mobileView="mobileView / 2" 
                            :maxView="2"/>
                    </div>
                    <div class="col-4">
                        <div class="content-container">
                            <h2> {{ tickets }} </h2>
                            <div class="data-container">
                                <p class="label"> Name: </p>
                                <p> Jenny Liang</p>
                            </div>
                            <div class="data-container">
                                <p class="label"> Email Address: </p>
                                <p> jliang9@uw.edu </p>
                            </div>
                            <div class="data-container">
                                <p class="label"> Payment Card: </p>
                                <p> **** **** **** 1234 </p>
                            </div>
                        </div>
                        <div class="content-container">
                            <h2> Summary </h2>
                            <div class="data-container">
                                <p> UW Student Ticket <span class="data"> (x2) </span> </p>
                                <p class="data"> $19.50 </p>
                            </div>
                            <div class="data-container">
                                <p> General Admission Ticket </p>
                                <p class="data"> $19.50 </p>
                            </div>
                        </div>
                        <button class="primary">Confirm</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
const DEMO_MODE = false;
const MOBILE_MAX_WIDTH = 1350;
import SpotlightTicketView from "@/components/SpotlightTicketView";
import Ticket from "@/components/Ticket";
import CheckoutForm from "@/components/CheckoutForm";
import SideNavBar from "@/components/SideNavBar";

export default {
  name: "ConfirmationPage",
  components: { SpotlightTicketView, Ticket, CheckoutForm, SideNavBar },
  props: ["tickets"],
  data() {
    return {
      creatingTicket: false,
      showError: false,
      mobileView: false,
      paymentScreen: false,
      data: 0
    };
  },
  created() {
    var script = document.createElement('script');
    script.setAttribute('src', "https://js.stripe.com/v3/");
    document.head.appendChild(script);
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.recalculateMobileView);
    });
    this.recalculateMobileView();
    this.addTicket();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.recalculateMobileView);
  },
  methods: {

    /** Scrolls to top of webpage. */
    scrollToTop() {
      window.scrollTo(0,0);
    },

    /** Calculates whether mobileView should be enabled based on screen width. */
    recalculateMobileView() {
      this.mobileView = window.innerWidth < MOBILE_MAX_WIDTH;
    },
  },
  computed: {
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

h1, h2 {
  font-weight: 300;
}

h2 {
    border-bottom: solid 3px $color-primary;
    line-height: 2; 
    margin: 0;
}

main {
    margin-left: 200px;
    padding: 1em 3em;
    height: 100%;
}

.data-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
}

.data {
    color: $color-primary;
    font-size: 0.9em;
}

p {
    margin: 0.35em 0;
}

.label {
    font-weight: 700;
}

.content-container {
    margin-bottom: 2.5em;
}

button {
    width: 100%;
}

</style>
