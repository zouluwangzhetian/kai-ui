<template>
  <div :class="[radioClass, !disabled?'k-radio-disabled':'']" @click="setValue">
    <label :class="isCheckCls">
      <span class="k-radio-icon"></span>
      <span class="k-radio-text">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script>
const radioPrefix = 'k-radio'

export default {
  name: 'kRadio',
  model: {
    prop: 'checkedValue',
    event: 'input'
  },
  props: {
    value: [String, Number, Boolean, Object, Array],
    checkedValue: [String, Number, Boolean, Object, Array],
    disabled: {
      default: true
    }
  },
  computed: {
    radioClass() {
      return radioPrefix
    },
    isCheckCls() {
      const isChecked = this.value === this.checkedValue
      let disabledCheck = 'k-radio-checked'
      let disabledUnCheck = 'k-radio-un-checked'
      if (!this.disabled) {
        disabledCheck += ' k-radio-disabled'
        disabledUnCheck += ' k-radio-disabled'
      }
      return isChecked ? disabledCheck : disabledUnCheck
    }
  },
  methods: {
    setValue() {
      if (this.disabled) {
        const value = this.value
        this.$emit('input', value)
        this.$emit('change', value)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.k-radio {
  display: inline-block;
  user-select: none;
  .k-radio-icon {
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    overflow: hidden;
    margin: 0 5px 0 0;
    border-radius: 50%;
    vertical-align: -3px;
    transition: 0.2s;
    &:after {
      content: '';
      display: block;
      position: relative;
      left: 3px;
      top: 3px;
      width: 8px;
      height: 8px;
      background-color: #4caf50;
      border-radius: 50%;
      transition: 0.2s;
    }
  }
  .k-radio-un-checked {
    .k-radio-icon {
      border: 1px solid rgba(#c1c1c1, 0.85);
      &:after {
        transform: scale(0);
      }
    }
  }
  .k-radio-checked {
    .k-radio-icon {
      border: 1px solid #4caf50;
      &:after {
        transform: scale(1);
      }
    }
  }
  &:hover {
    .k-radio-icon {
      border: 1px solid #4caf50;
    }
  }
}
.k-radio.k-radio-disabled {
  .k-radio-disabled {
    color: #999;
    pointer-events: painted;
    cursor: not-allowed;
    .k-radio-icon {
      cursor: not-allowed;
      border: 1px solid #999;
      &:after {
        background-color: #999;
      }
    }
  }
  &:hover {
    .k-radio-icon {
      border: 1px solid #999;
    }
  }
}
</style>