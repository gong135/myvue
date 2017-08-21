<template>
  <button class="lh-button"
          @click="handleClick"
          :disabled="disabled"
          :type="nativeType"
          :class="
          [
            type ? 'lh-button--' + type : '',
            {
              'is-disabled': disabled,
              'is-loading': loading
            }
          ]">
    <i class="lh-icon-loading" v-if="loading"></i>
    <span class="lh-button-content" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
  export default {
    name: 'Button',
    props: {
      type: {
        type: String,
        default: 'default',
      },
      nativeType: {
        type: String,
        default: 'button',
      },
      loading: Boolean,
      disabled: Boolean,
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      },
    },
  };
</script>

<style lang="scss">
  @import "../../../core/style/var";

  $default-button-size: 36px;
  $float-button-size: 50px;
  $flat-button-size: 50px;

  @function click-shadow() {
    @return 0 0 3px 1px rgba(0, 0, 0, 0.08) inset;
  }

  .lh-button {
    @include auto-animate;
    @include clickable;
    outline: none;
    border: none;
    line-height: 1;
    vertical-align: middle;
    overflow: hidden;
    box-sizing: border-box;
    &.is-disabled {
      cursor: not-allowed;
    }
  }

  .lh-button-content {
    display: inline-block;
  }

  .lh-button--default {
    min-width: $default-button-size;
    height: $default-button-size;
    border-radius: $default-button-size / 2;
    font-size: $text-font-size;
    background: $white;
    color: $gray;
    padding: 0 12px;
    @include border;
    &:hover:enabled, &:focus:enabled {
      background: $primary-color;
      color: $white;
    }
    &:active:enabled {
      background: click-color($primary-color);
      box-shadow: click-shadow();
    }
    &.is-disabled {
      color: $light-gray;
      background: #eeeeee;
    }
  }

  .lh-button--primary {
    min-width: $default-button-size;
    height: $default-button-size;
    border-radius: $default-button-size / 2;
    font-size: $text-font-size;
    background: $primary-color;
    color: $white;
    padding: 0 12px;
    @include border;
    &:hover:enabled, &:focus:enabled {
      background: hover-color($primary-color);
    }
    &:active:enabled {
      background: click-color($primary-color);
      box-shadow: click-shadow();
    }
    &.is-disabled {
      color: $light-gray;
      background: #eeeeee;
    }
  }

  .lh-button--danger {
    min-width: $default-button-size;
    height: $default-button-size;
    border-radius: $default-button-size / 2;
    font-size: $text-font-size;
    background: $danger-color;
    color: $white;
    padding: 0 12px;
    border: 1px solid inherit;
    &:hover:enabled, &:focus:enabled {
      background: hover-color($danger-color);
    }
    &:active:enabled {
      background: click-color($danger-color);
    }
  }

  .lh-button--text {
    font-size: $hint-font-size;
    color: $primary-color;
    background: transparent;
    &:hover:enabled .lh-button-content {
      color: hover-color($primary-color);
      border-bottom: 1px solid hover-color($primary-color);
    }
    &:focus:enabled .lh-button-content {
      color: hover-color($primary-color);
    }
    &:active:enabled {
      color: click-color($primary-color);
    }
    &.is-disabled {
      color: $light-gray;
    }
  }

  .lh-button--float {
    min-width: $float-button-size;
    max-width: $float-button-size;
    height: $float-button-size;
    border-radius: $float-button-size / 2;
    background: $accent-color;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    &:hover:enabled {
      background: hover-color($accent-color);
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    }
    &:active:enabled {
      background: click-color($accent-color);
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.5), click-shadow();
    }
    &.is-disabled {
      color: $light-gray;
      background: #eeeeee;
    }
  }

  .lh-button--flat {
    min-width: $flat-button-size;
    max-width: $flat-button-size;
    height: $flat-button-size;
    background: transparent;
    color: $white;
    &:hover:enabled {
      color: $accent-color;
    }
    &.is-disabled {
      color: rgba(255, 255, 255, 0.5);
    }
    & + & {
      margin-left: 10px;
    }
  }
</style>
