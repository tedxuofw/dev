<template>
  <div class="container components-page">
    <tab-set :secondary="secondary">
      <tab-option v-for="(page, pageIndex) in pages" :key="pageIndex"
        :selected="selectedIndex == pageIndex" :secondary="secondary"
        :click="() => navigateTo(page.url)">{{ page.name }}</tab-option>
      <tab-option spacer />
      <tab-option :secondary="secondary">
        <button class="primary-2 no-margin">Attend</button>
      </tab-option>
    </tab-set>
    <slot></slot>
    <Footer />
  </div>
</template>

<script>
import TabSet from "@/components/TabSet";
import TabOption from "@/components/TabOption";
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
    }
  },
  components: { TabSet, TabOption, Footer },
  data() {
    return {
      pages: [
        { name: 'Home', url: '/' },
        { name: 'Speakers', url: '/speakers' },
        { name: 'Sponsors', url: '/sponsors' },
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' }
      ]
    }
  },
  methods: {
    navigateTo(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
$hero-break: 850px;

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
