<template>
    <div class="ticket-container" :style="{ maxWidth: maxWidth }">
      <div v-bind:class="{ overlay: addButton }" v-if="addButton" @click="goToCheckout()"> 
        <div class="plus"> + </div>
        <div class="new-ticket"> NEW TICKET </div>
      </div>
      <div class="conference-info">
        <div class="info-small ticket-type">{{ ticketType }}</div>
        <div class="conference-main">
          <div class="conference-name-year">
            <span class="conference-name">{{ conferenceName }}</span>
            <span class="info-small conference-year">{{ conferenceYear }}</span>
          </div>
          <div class="conference-title">{{ conferenceTitle }}</div>
        </div>
        <div class="info-small ticket-number">Email: {{ email }}</div>
      </div>
      <div class="person-info">
        <div class="info-set">
          <p class="footnote">Name</p>
          <p class="person-name">{{ personName }}&nbsp;</p>
        </div>
        <div class="info-set">
          <p class="footnote">Ticket Type</p>
          <p class="person-meal">{{ ticketType }}&nbsp;</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Ticket',
  props: {
    name: {
      type: String,
      default: ''
    },
    maxWidth: {
      type: String,
      default: ''
    },
    conferenceName: {
      type: String,
      default: 'TEDxUofW'
    },
    conferenceYear: {
      type: String
    },
    conferenceTitle: {
      type: String
    },
    personName: {
      type: String
    },
    ticketType: {
      type: String
    },
    email: {
      type: String
    },
    addButton: {
      type: Boolean
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.overlay {
  min-width: 250px;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.overlay:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

.plus {
  font-size: 5em;
  color: $color-primary;
  margin-bottom: 0.25em;
}

.new-ticket {
  font-size: 0.9em;
}

.ticket-container {
  min-width: 250px;
  width: 100%;
  border: 1px solid $color-secondary;
  box-shadow: 10px 10px 31px 0px rgba(194,194,194,1);
  position: relative;

  .conference-info {
    background-color: $color-primary;
    color: $color-text-light;
    padding: 16px;
    background-image: url('/static/circle.svg');
    background-repeat: no-repeat;
    background-position: 500% 90%;
    background-size: 90%;

    .ticket-type {
      text-align: right;
    }

    .conference-main {
      padding: 32px 0;

      .conference-name-year {
        .conference-name {
          font-size: 24px;
        }
      }

      .conference-title {
        font-size: 42px;
        line-height: 1.2em;
      }
    }
  }

  .person-info {
    padding: 16px;

    .info-set {
      padding-bottom: 16px;

      p {
        margin: 0;
      }

      p:not(.footnote) {
        font-size: 1.2em;
      }
    }
  }

  .info-small {
    font-size: 14px;
  }
}
</style>
