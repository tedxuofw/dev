<template>
  <div class="conference-nav">
    <div class="mobile-nav">
      <img class="logo" src="/static/navbar-logo.svg" alt="TEDxUofW Logo" />
      <button class="hamburger" :class="{ active: mobileShowNav }" @click="onClickNav"><img src="/static/hamburger.svg" alt="Menu icon" /></button>
    </div>
    <tab-set :secondary="secondary" :mobileShowNav="mobileShowNav">
      <tab-option logo :click="() => navigateTo('/')"><img src="/static/navbar-logo.svg" alt="TEDxUofW Logo" /></tab-option>
      <tab-option v-for="(page, pageIndex) in pages" :key="pageIndex"
        :selected="selectedIndex == pageIndex" :secondary="secondary"
        :click="() => navigateTo(page.url)">{{ page.name }}</tab-option>
      <tab-option spacer />
      <tab-option :secondary="secondary">
        <!-- <button class="primary-2 cta-button no-margin" @click="() => navigateTo('/login')">Buy Tickets Now</button> -->
        <a href="http://dev.tedxuofw.com/#/login/"> <button class="primary-2 cta-button no-margin">Buy Tickets Now</button> </a>
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
        // { name: 'Speakers', url: '/speakers' },
        // { name: 'Sponsors', url: '/sponsors' },
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' }
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

  .mobile-nav {
    display: none;
    align-items: center;
    width: 100%;
    background-color: $color-secondary-2;
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

  .cta-button {
    background: none !important;
    padding-left: 32px;
    padding-right: 32px;
  }
}
</style>
