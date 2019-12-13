<template>
  <label
    :class="switchClass"
    @click="setValue">
    <span class="k-switch-span">
      <span class="k-switch-inner"></span>
    </span>
    <span class="k-switch-text"><slot></slot></span>
  </label>
</template>

<script>
const switchPrefix = 'k-switch'

export default {
  name: 'kSwitch',
  props: {
    value: [Boolean, String, Number],
    small: [Boolean],
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  computed: {
    switchClass () {
      return {
        [`${switchPrefix}`]: switchPrefix,
        [`${switchPrefix}-checked`]: this.isChecked,
        [`${switchPrefix}-small`]: this.small
      }
    },
    isChecked () {
      return this.value === this.trueValue
    }
  },
  methods: {
    setValue () {
      const result = this.isChecked ? this.falseValue : this.trueValue
      this.$emit('input', result)
      this.$emit('change', result)
    }
  }
}
</script>
<style lang="less" scoped>
.k-switch{
  position: relative;
  line-height: 28px;
  cursor: pointer;
  display: inline-block;
  &:active{
    .k-switch-span{
      &:after{
        width: 32px;
      }
    }
  }
  .k-switch-span{
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    min-width: 48px;
    height: 28px;
    margin: 0 5px 0 0;
    overflow: hidden;
    background-color: rgba(#c1c1c1, .85);
    border-radius: 16px;
    vertical-align: middle;
    user-select: none;
    transition: .2s ease-in-out;
    &:before, &:after{
      content: "";
      position: absolute;
      transition: .2s ease-in-out;
    }
    &:before{
      background-color: rgba(#c1c1c1, .85);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    &:after{
      top: 2px;
      left: 2px;
      width: 24px;
      height: 24px;
      border-radius: 15px;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0,0,0,.4);
    }
  }
}
.k-switch-small{
  line-height: 22px;
  .k-switch-span{
    min-width: 40px;
    height: 22px;
    &:after{
      width: 18px;
      height: 18px;
    }
  }
  &:active{
    .k-switch-span{
      &:after{
        width: 24px;
      }
    }
  }
  .k-switch-checked{
    .k-switch-span{
      &:after{
        left: 20px;
      }
    }
  }
}
.k-switch-checked{
  .k-switch-span{
    background-color: #4CAF50;
    &:after{
      left: 22px;
    }
    &:before{
      transform: scale(0);
    }
  }
  &:active{
    .k-switch-span{
      &:after{
        left: 14px;
      }
    }
  }
}
</style>
