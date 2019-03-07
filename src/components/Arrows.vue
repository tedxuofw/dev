<template>
  <span class="arrows" :style="style">{{ reverse ? '&laquo;' : '&raquo;' }}</span>
</template>

<script>
export default {
  name: "Arrows",
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    style: {
      type: String | Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
</style>
