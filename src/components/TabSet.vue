<template>
    <div class="tab-set" :class="{ secondary, 'mobile-show-nav': mobileShowNav }">
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
    },
    mobileShowNav: {
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
  overflow-x: auto;
  background-color: $color-primary;
  align-items: stretch;
  transition: max-height 250ms, padding 250ms;

  &.secondary {
    background-color: $color-secondary-2;
  }

  @media screen and (max-width: $tabset-break) {
    flex-direction: column;
    height: inherit;
    max-height: calc(100vh - #{$height-tabset});
    padding: 16px 0;
  }

  &:not(.mobile-show-nav) {
    @media screen and (max-width: $tabset-break) {
      max-height: 0;
      padding: 0;
      overflow: hidden;
    }
  }
}
</style>
