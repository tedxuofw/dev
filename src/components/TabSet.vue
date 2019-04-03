<template>
    <div class="tab-set" :class="{ secondary }">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabSet',
  props: {
    secondary: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.tab-set {
  display: flex;
  height: $height-tabset;
  width: 100%;
  max-width: 100vw;
  overflow-x: scroll;
  background-color: $color-primary;
  align-items: stretch;
  justify-content: center;

  &.secondary {
    background-color: $color-secondary-2;
  }
}
</style>
