<template>
  <div v-if="tickets.length > 0" :class="{ 'mobile-view': mobileView }">
    <transition-group name="fade" tag="div" class="tickets-container">
      <div class="ticket-container" v-for="ticket in spotlightTickets" :key="ticket.id" @click="onClickTicket(ticket)">
        <Ticket
          class="ticket"
          :class="{ 'non-spotlight-ticket': !ticket.spotlight }"
          conferenceTitle="Two Steps Forward" conferenceYear="2019"
          :personName="`${ticket.firstName}`"
          :ticketType="ticket.ticket" :email="`${ticket.email}`"
          maxWidth="300px" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import Ticket from "@/components/Ticket";
export default {
  name: "SpotlightTicketView",
  components: { Ticket },
  props: {
    tickets: {
      type: Array
    },
    onClickTicket: {
      type: Function
    },
    mobileView: {
      type: Boolean
    },
    maxView: {
      type: Number
    }
  },
  computed: {
    /**
     * Returns an array that should be used to display tickets on spotlight view.
     * When editing, only the currently-selected ticket is spotlighted.
     * When on mobile view, there is no special formatting.
     * Otherwise, the tickets are reordered and the first one is emphasized.
     */
    spotlightTickets() {
      if(this.mobileView) {
        return this.tickets
          .map((ticket, ticketIndex) => ({ ...ticket, index: ticketIndex }));
      }

      let result = this.tickets
        .map((ticket, ticketIndex) => ({ ...ticket, index: ticketIndex }))
        .filter((ticket, ticketIndex) => ticketIndex < this.maxView)
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
.mobile-view .row.overview-screen-row {
  margin-left: 0;
  margin-right: 0;
  max-width: 100%;
  width: 100%;

  .tickets-container {
    justify-content: flex-start;
    overflow-x: scroll;
    width: 100%;
  }
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

/** Transitions for spotlight tickets. */
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
