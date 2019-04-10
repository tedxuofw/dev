<template>
    <div class="tab-option" :class="{ selected, secondary, container, spacer, logo }" @click="click">   
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
    logo: {
      type: Boolean,
      default: false
    },
    spacer: {
      type: Boolean,
      default: false
    },
    container: {
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
  height: 100%;
  text-align: center;
  margin: 0 8px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: $color-primary-2;
  box-sizing: border-box;
  white-space: nowrap;

  &.spacer {
    width: 100%;
  }

  &.logo {
    display: flex;
    justify-content: center;
    align-items: center;

    .tab-option-label {
      height: 60%;

      img {
        height: 100%;
      }
    }
  }

  &.selected {
    color: white;
    font-weight: 700;
  }

  &.secondary {
    color: $color-secondary;

    &.selected {
      color: $color-primary;
      font-weight: 700;
    }
  }
}
</style>
