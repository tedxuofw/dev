<template>
  <div class="container components-page">
    <tab-set :secondary="secondary">
      <tab-option v-for="(page, pageIndex) in pages" :key="pageIndex"
        :selected="selectedIndex == pageIndex" :secondary="secondary">{{ page }}</tab-option>
      <tab-option spacer />
      <tab-option :secondary="secondary">
        <button class="primary-2 no-margin">Attend</button>
      </tab-option>
    </tab-set>
    <slot></slot>
  </div>
</template>

<script>
import TabSet from "@/components/TabSet";
import TabOption from "@/components/TabOption";
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
  components: { TabSet, TabOption },
  data() {
    return {
      pages: ['Home', 'Speakers', 'Sponsors', 'About', 'Contact']
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
</style>
