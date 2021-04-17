<template>
  <div class="conference-nav">
    <div class="mobile-nav">
      <router-link class="logo-holder-link" to="/">
        <img class="logo logo-default" src="/static/logo_2021.svg" alt="TEDxUofW Logo" />
      </router-link>
      <button class="hamburger" :class="{ active: mobileShowNav }" @click="onClickNav"><img src="/static/hamburger.svg" alt="Menu icon" /></button>
    </div>
    <tab-set style="justify-content: center;" :secondary="secondary" :mobileShowNav="mobileShowNav">
      <tab-option logo :click="() => navigateTo('/')">
        <img class="logo logo-default" src="/static/logo_2021.svg" alt="TEDxUofW Logo" />
      </tab-option>
      <tab-option style="text-transform: uppercase; letter-spacing: 0.005em;" class="hover-red" v-for="(page, pageIndex) in pages" :key="pageIndex"
        :selected="selectedIndex == pageIndex" :secondary="secondary"
        :click="() => navigateTo(page.url)">{{ page.name }}</tab-option>
      <!-- <tab-option spacer /> -->
      <tab-option :secondary="secondary">
        <!-- <img class="footstep" src="/static/footstep.png" alt="Footstep icon" />
        <img class="footstep" src="/static/footstep.png" alt="Footstep icon" />
        <img class="footstep" src="/static/footstep.png" alt="Footstep icon" /> -->
        <button class="tertiary cta-button no-margin" @click="() => redirectTo('https://docs.google.com/forms/d/e/1FAIpQLScVzpwKwCGg5k-ojyl2CBt5unRlBLE42FfLU2LxlSmqdM0mpg/viewform?vc=0&c=0&w=1&flr=0&gxids=7628')">REGISTER</button>
      </tab-option>
    </tab-set>
  </div>
</template>

<script>
import TabSet from "@/components/TabSet";
import TabOption from "@/components/TabOption";
export default {
  name: "ConferenceNavbar",
  props: {
    secondary: {
      type: Boolean,
      default: true
    },
    selectedIndex: {
      type: Number,
      default: -1
    }
  },
  components: { TabSet, TabOption },
  data() {
    return {
      pages: [
        { name: 'Home', url: '/' },
        { name: 'Speakers', url: '/speakers' },
        { name: 'Sponsors', url: '/sponsors' },
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Schedule', url: '/livestream' },
      ],
      mobileShowNav: false
    }
  },
  methods: {
    navigateTo(url) {
      this.$router.push(url);
    },
    onClickNav() {
      this.mobileShowNav = !this.mobileShowNav;
    },
    redirectTo(url) {
      window.location.replace(url);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.conference-nav {
  width: 100%;
  background-color: $color-secondary-2;
  box-shadow: 0 1px 5px #888888;
  z-index: 100;
  font-size: 1rem;

  .logo-holder-link {
    height: 100%;
    object-fit: cover;
    display: flex;
    align-items: center;
  }

  .mobile-nav {
    display: none;
    align-items: center;
    width: 100%;
    padding: 0 32px;
    box-sizing: border-box;
    // height: 65px;
    height: $height-tabset;
    justify-content: space-between;

    img.logo {
      height: 50%;
    }

    .hamburger {
      transition: transform 250ms;

      &.active {
        transform: rotate(90deg);
      }
    }

    @media screen and (max-width: $tabset-break) {
      display: flex;
    }
  }

  $footstep-rotations: (20deg, 25deg, 22deg);
  $main-animation-duration: 2300ms;
  $footstep-animation-delay: 100ms;
  $footstep-animation-per-delay: 500ms;
  $num-footsteps: 3;
  $button-flash-duration: 800ms;

  .footstep {
    width: 40px;
    height: 15px;
    margin-right: 10px;
    animation-name: footstep-appear;
    animation-delay: $main-animation-duration;
    animation-duration: 1ms;
    animation-fill-mode: forwards;
    opacity: 0;

    @media screen and (max-width: $tabset-break) {
      display: none;
    }

    &:last-of-type {
      margin-right: 16px;
    }

    @for $i from 1 through $num-footsteps {
      &:nth-of-type(#{$i}) {
        @if $i % 2 == 0 {
          transform: scaleY(-1) translateY(50%) rotate(#{nth($footstep-rotations, $i)});
        }
        @else {
          transform: translateY(50%) rotate(#{nth($footstep-rotations, $i)});
        }

        animation-delay: $main-animation-duration + $footstep-animation-delay + $i * $footstep-animation-per-delay;
      }
    }
  }

  .cta-button {
    background-color: transparent;
    padding-left: 32px;
    padding-right: 32px;
    padding: 4px 32px;
    color: black !important;
    border: 2px solid #e62b1e;
    font-size: 15px;
    font-weight: 700;

    // animation-name: button-flash;
    // animation-delay: $main-animation-duration + $footstep-animation-delay + ($num-footsteps + 1) * $footstep-animation-per-delay;
    // animation-duration: $button-flash-duration;
    // animation-fill-mode: forwards;
  }

  .cta-button:hover {
    color: white !important;
    background-color: #e62b1e;
    transition: ease .3s; 
  }

  .hover-red:hover {
    color: #e62b1e;
    transition: ease .2s;
  }
}

@keyframes footstep-appear {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes button-flash {
  0% {
    background-color: transparent;
  }

  50% {
    background-color: rgba($color-primary, 0.4);
  }

  100% {
    background-color: transparent;
  }
}
</style>
