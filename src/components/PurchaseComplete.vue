<template>
    <div class="container components-page">
        <div class="row overview-screen-row">
            <div class="col-6 thank-you">
                Thank you for your purchase! You will receive an email shortly from Stripe confirming your purchase. <span class="important"> Your tickets will arrive a week before the conference. </span> <br/> <br/>
                Please email <a href = "mailto: tedxuofw@uw.edu"> tedxuofw@uw.edu</a> for any questions.
            </div>
            <div class="col-6">
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
                    <!--<div class="data-container">
                        <p class="label"> Payment Card: </p>
                        <p> **** **** **** 1234 </p>
                    </div> -->
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
            </div>
        </div>
        <a href="/#/dashboard"> <button class="primary">Continue</button> </a>
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
  name: "PurchaseComplete",
  components: { SpotlightTicketView, Ticket, CheckoutForm, SideNavBar },
  data() {
    return {

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
  methods: {
    updateParent() {
        this.$emit("changed");
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.important {
    color: $color-primary;
    font-weight: 700;
}

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

.thank-you {
    padding: 1em;
}

</style>
