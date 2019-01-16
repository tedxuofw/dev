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
    <div class ="row">
      <div class="col-6">
        <Ticket
          conferenceTitle="Two Steps Forward" conferenceYear="2019"
          personName="Andrey" personMeal="Vegan"
          ticketType="UW Student Ticket" confirmationCode="SB1103"
          maxWidth="300px" />
      </div>
      <div class="col-6">

      </div>
    </div>
  </div>
</template>

<script>
import Ticket from "@/components/Ticket";
export default {
  name: "CheckoutPage",
  components: { Ticket },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
</style>
