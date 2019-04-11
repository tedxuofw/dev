<template>
    <div class="container components-page" :class="{ 'mobile-view': mobileView }">
        <div class="row overview-screen-row" :class="{ 'allow-wrap': mobileView }">
            <div class="col-8">
                <SpotlightTicketView
                    :class="{ 'col-12': mobileView, 'col-8': !mobileView }"
                    :tickets="spotlightTickets"
                    :mobileView="mobileView" 
                    :maxView="2"/>
            </div>
            <div class="col-4">
                <div class="content-container">
                    <h2> Payment Information </h2>
                    <div class="data-container">
                        <p class="label"> Name: </p>
                        <p> {{ user.first }} {{ user.last }} </p>
                    </div>
                    <div class="data-container">
                        <p class="label"> Email: </p>
                        <p>{{ user.email }}</p>
                    </div>
                    <div class="data-container">
                        <p class="label"> Payment Card: </p>
                        <p> **** **** **** 1234 </p>
                    </div>
                </div>                
                <div class="content-container">
                    <h2> Summary </h2>
                    <div class="content-container">
                        <div class="data-container" v-for="purchase in purchases">
                            <p> {{ purchase.name }} <span class="data"> (x{{ purchase.quantity }}) </span> </p>
                            <p class="data"> ${{ purchase.cost }} </p>
                        </div>
                    </div>
                </div>
                <a @click="updateParent()"> <button class="primary">Confirm</button> </a>
            </div>
        </div>
    </div>

</template>

<script>
const DEMO_MODE = false;
const MOBILE_MAX_WIDTH = 1350;
import SpotlightTicketView from "@/components/SpotlightTicketView";
import Ticket from "@/components/Ticket";
import CheckoutForm from "@/components/CheckoutForm";
import SideNavBar from "@/components/SideNavBar";
import { user } from '../user.js';

export default {
  name: "ConfirmationPage",
  components: { SpotlightTicketView, Ticket, CheckoutForm, SideNavBar },
  data() {
    return {
      mobileView: false,
      user: {
          first: user.first(),
          last: user.last(),
          email: user.email(),
          profile: user.profile(),
      }
    };
  },
  props: {
    tickets: {
        type: Array
    },
    purchases: {
        type: Array
    },
    paymentId: {
        type: Number
    }
  },
  created() {
    // REMOVE DUPLICATE?
    var script = document.createElement('script');
    script.setAttribute('src', "https://js.stripe.com/v3/");
    document.head.appendChild(script);
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.recalculateMobileView);
    });
    this.recalculateMobileView();
    console.log("Test");
    console.log(this.tickets);
    console.log(this.purchases);
    console.log(this.paymentId);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.recalculateMobileView);
  },
  methods: {
    /** Calculates whether mobileView should be enabled based on screen width. */
    recalculateMobileView() {
      this.mobileView = window.innerWidth < MOBILE_MAX_WIDTH;
    },
    updateParent() {
        this.$emit("changed");
    }
  },
  computed: {
    /**
     * Returns an array to be used with SpotlightTicketView component.
     * When editing, only the currently-selected ticket is spotlighted.
     * When editing on mobile view, no ticket is spotlighted.
     */
    spotlightTickets() {
      console.log(this.props);
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

@media (max-width: 1350px) {
  .col-4 {
      width: 100%;
  }
}

</style>
