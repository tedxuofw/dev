<template>
  <div class="conference-nav">
    <div class="mobile-nav">
      <img class="logo logo-default" src="/static/navbar-logo.svg" alt="TEDxUofW Logo" />
      <button class="hamburger" :class="{ active: mobileShowNav }" @click="onClickNav"><img src="/static/hamburger.svg" alt="Menu icon" /></button>
    </div>
    <tab-set :secondary="secondary" :mobileShowNav="mobileShowNav">
      <tab-option logo :click="() => navigateTo('/')">
        <img class="logo logo-default" src="/static/navbar-logo.svg" alt="TEDxUofW Logo" />
      </tab-option>
      <tab-option v-for="(page, pageIndex) in pages" :key="pageIndex"
        :selected="selectedIndex == pageIndex" :secondary="secondary"
        :click="() => navigateTo(page.url)">{{ page.name }}</tab-option>
      <tab-option spacer />
      <tab-option :secondary="secondary">
        <!-- <img class="footstep" src="/static/footstep.png" alt="Footstep icon" />
        <img class="footstep" src="/static/footstep.png" alt="Footstep icon" />
        <img class="footstep" src="/static/footstep.png" alt="Footstep icon" /> -->
        <button class="tertiary cta-button no-margin" @click="() => navigateTo('/login')">Login</button>
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
        { name: 'Stream', url: '/conference' },
        { name: 'Speakers', url: '/speakers' },
        { name: 'Sponsors', url: '/sponsors' },
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' },
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

  .mobile-nav {
    display: none;
    align-items: center;
    width: 100%;
    padding: 0 32px;
    box-sizing: border-box;
    height: $height-tabset;
    justify-content: space-between;

    img.logo {
      height: 80%;
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
    color: $color-tertiary !important;

    // animation-name: button-flash;
    // animation-delay: $main-animation-duration + $footstep-animation-delay + ($num-footsteps + 1) * $footstep-animation-per-delay;
    // animation-duration: $button-flash-duration;
    // animation-fill-mode: forwards;
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
