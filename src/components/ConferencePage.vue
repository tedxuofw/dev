<template>
  <div class="container components-page">
    <ConferenceNavbar :secondary="secondary" :selectedIndex="selectedIndex" />
    <slot></slot>
    <Footer :footerMargin="footerMargin" />
  </div>
</template>

<script>
import ConferenceNavbar from '@/components/ConferenceNavbar';
import Footer from "@/components/Footer";
export default {
  name: "ConferencePage",
  props: {
    secondary: {
      type: Boolean,
      default: true
    },
    selectedIndex: {
      type: Number,
      default: -1
    },
    footerMargin: {
      type: Boolean,
      default: true
    }
  },
  components: { ConferenceNavbar, Footer }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
$hero-break: 850px;

.mobile-nav {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: $color-secondary-2;
  padding: 0 32px;
  box-sizing: border-box;
  height: $height-tabset;
  justify-content: space-between;

  img {
    height: 80%;
  }
}

.cta-button {
  background: none !important;
  padding-left: 32px;
  padding-right: 32px;
}

.standard-hero {
  width: 100%;
  height: calc(85vh - #{$height-tabset});
  background-color: black;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 64px 120px;
  box-sizing: border-box;
  color: white;

  @media screen and (max-width: $hero-break) {
    padding: 64px 32px;
  }

  h1 {
    font-weight: 700;
    margin: 0;
    font-size: 14vh;
    line-height: 1em;
    margin-bottom: 64px;

    @media screen and (max-width: $hero-break) {
      font-size: 64px;
    }
  }

  .accent {
    width: 80px;
    height: 18px;
    background-color: $color-primary;
  }
}
</style>
