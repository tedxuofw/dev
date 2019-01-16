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
    <div class="row" v-for="(ticket, ticketIndex) in tickets" :key="ticketIndex">
      <div class="col-6">
        <Ticket
          conferenceTitle="Two Steps Forward" conferenceYear="2019"
          :personName="ticket.name" :personMeal="ticket.meal"
          :ticketType="ticket.ticket" :confirmationCode="`SB110${ticketIndex}`"
          maxWidth="300px" />
      </div>
      <div class="col-6 ticket-form">
        <h1>{{ ticket.name ? `${ticket.name.split(' ')[0]}'s Ticket` : `Ticket ${ticketIndex + 1}` }}</h1>
        <h2>Name</h2>
        <input type="text" placeholder="First Name" class="full-width" v-model="ticket.name" >

        <h2>Meal Type</h2>
        <select v-model="ticket.ticket">
          <option disabled value="">Select a ticket</option>
          <option>General Ticket</option>
          <option>UW Student Ticket</option>
        </select>

        <h2>Meal Type</h2>
        <select v-model="ticket.meal">
          <option disabled value="">Select a meal</option>
          <option>None</option>
          <option>Vegan</option>
          <option>Non-Vegan</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button @click="addTicket()">Add another ticket</button>
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
      tickets: []
    };
  },
  mounted() {
    this.addTicket();
  },
  methods: {
    addTicket() {
      this.tickets.push(this.getEmptyTicket())
    },
    getEmptyTicket() {
      return {
        name: '',
        meal: '',
        ticket: ''
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.ticket-form h2 {
  margin-bottom: 8px;
}
</style>
