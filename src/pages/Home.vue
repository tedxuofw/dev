<template>
  <ConferencePage :selectedIndex="0" :footerMargin="false">
    <Splash />
    <div class="container section section-about">
      <div class="row">
        <div class="col-6 no-margin content">
          <h2>Ideas worth sharing at the<br/>University of Washington</h2>
          <p>
            For the past 7 years, TEDxUofW has been gathering a collection of great creative thinkers, scientific minds, and community leaders in our annual conference. Join us to celebrate the confidence and spread ideas that can make our future better!
          </p>
          <router-link class="button ghost" to="login">Register</router-link>
        </div>
      </div>
    </div>
    <div class="container section-accent">
      <div class="row">
        <div class="col-6 content">
          <div class="accent"></div>
        </div>
      </div>
    </div>
    <div class="container section section-explore">
      <div class="row">
        <div class="col-6 no-margin content">
          <h2>Explore TEDxUofW 2019</h2>
          <div class="explore-card-container">
            <div class="explore-card">
              <img src="/static/explore-tickets.png" alt="Tickets" />
              <h3>Get your tickets</h3>
              <p>
                Grab tickets for youself or your group with your TEDxUofW account.
              </p>
              <router-link class="button ghost" to="login">Register</router-link>
            </div>
            <div class="explore-card">
              <img src="/static/explore-speaker.png" alt="Photo of a speaker" />
              <h3>Interact with Speakers</h3>
              <p>
                Ask questions or share your thoughts with speakers after hearing their talks. Inspiring ideas now go both ways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container section section-community">
      <img class="community-arrow-deco" src="/static/animation-arrow-left.svg" alt="Arrow decoration" />
      <div class="row">
        <div class="col-6 no-margin content">
          <h2>TEDxUofW as a community</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna
          </p>
        </div>
      </div>
    </div>
    <div class="container section section-newsletter">
      <div class="row">
        <div class="col-6 no-margin"></div>
        <div class="col-6 no-margin content">
          <h2>Sign up for our newsletter</h2>
          <input placeholder="Email" type="email" />
          <button class="button">Sign up</button>
        </div>
      </div>
    </div> -->
  </ConferencePage>
</template>

<script>
import Arrows from "@/components/Arrows";
import ConferencePage from "@/components/ConferencePage";
import Splash from "@/components/Splash";
export default {
  name: "HomePage",
  components: { Arrows, ConferencePage, Splash }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.ghost {
  text-decoration: none;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 40px;
    line-height: 1.2em;
    text-align: center;
  }
}

.section-about {
  background-image: url('/static/decoration_left_transparent.png');
  background-repeat: no-repeat;
  background-position: calc(100% + 40px) calc(100% + 40px);
  background-color: $color-secondary-2;
  min-height: 80vh;

  h2 {
    color: $color-tertiary;
  }

  p {
    margin-bottom: 40px;
  }

  .content {
    text-align: center;
  }

  a.button {
    width: 140px;
    max-width: 100%;
    margin: 0 auto;
  }
}

.section-accent {
  background-color: $color-secondary-2;

  .col-6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 24px;
  }
  
  .accent {
    height: 16px;
    width: 140px;
    max-width: 100%;
    margin: 0 auto;
    background-color: $color-primary;
  }
}

.section-explore {
  background: linear-gradient(to bottom, $color-secondary-2 0%,#ffffff 100%);

  .explore-card-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 80px;

    @media screen and (max-width: 1260px) { 
      flex-direction: column;
    }

    .explore-card {
      flex: 1 0;
      background-color: $color-secondary-2;
      border-bottom: 8px solid $color-primary;
      margin: 0 16px;
      padding: 16px;

      @media screen and (max-width: 1260px) {
        margin: 16px 0;
      }

      &:first-of-type {
        margin-left: 0;
      }

      &:last-of-type {
        margin-right: 0;
      }

      img {
        width: 100%;
      }

      a {
        text-align: center;
      }
    }
  }
}

.section-community {
  background-color: $color-secondary-2;
  height: inherit;
  padding-top: 40px;
  padding-bottom: 60px;
  position: relative;

  .community-arrow-deco {
    position: absolute;
    top: 0;
    left: -40px;
    height: 300px;
    margin-top: -(300px / 2) + 5px;

    @media screen and (max-width: 760px) {
      height: 100px;
      margin-top: -(100px / 2) + 5px;
      left: -10px;
    }
  }

  h2 {
    color: $color-tertiary;
  }
}

.section-newsletter {
  background-image: url('/static/speakers-page-header.jpg');
  height: 450px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 85%;

  h2 {
    text-align: left;
    color: #ffffff;
  }

  input,
  button {
    width: 400px;
    max-width: 100%;
  }
}
</style>
