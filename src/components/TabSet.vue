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

  &.secondary {
    background-color: $color-secondary-2;
  }

  @media screen and (max-width: $tabset-break) {
    flex-direction: column;
    height: inherit;
    padding: 16px 0;
  }

  &:not(.mobile-show-nav) {
    @media screen and (max-width: $tabset-break) {
      display: none;
    }
  }
}
</style>
