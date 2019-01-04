<template>
    <div class="tab-option" :class="{ selected, secondary }" @click="click">   
      <div class="tab-option-label">
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TabOption',
  props: {
    secondary: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    click: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.tab-option {
  flex: 1;
  height: 100%;
  text-align: center;
  margin: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: $color-primary-2;
  box-sizing: border-box;
  border-bottom: 8px solid transparent;

  &.selected {
    border-bottom: 8px solid $color-primary-2;
  }

  &.secondary {
    color: $color-secondary;

    &.selected {
      color: $color-primary;
      border-bottom: 8px solid $color-primary;
    }
  }
}
</style>
