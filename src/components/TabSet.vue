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
  height: 80px;
  width: 100%;
  background-color: $color-primary;

  &.secondary {
    background-color: $color-secondary-2;
  }
}
</style>
