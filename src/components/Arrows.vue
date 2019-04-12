<template>
  <span class="arrows">{{ reverse ? '&laquo;' : '&raquo;' }}</span>
</template>

<script>
export default {
  name: "Arrows",
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
</style>
