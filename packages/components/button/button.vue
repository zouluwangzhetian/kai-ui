<template>
  <button :class="btnClass" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
const btnPrefix = 'k-btn'
const props = {
  size: new Set(['l', 's', 'xs'])
}

export default {
  name: 'kButton',
  props: {
    color: [String],
    text: [Boolean],
    noBorder: [Boolean],
    size: [String]
  },
  computed: {
    btnClass() {
      const color = this.color
      const text = this.text
      const noBorder = this.noBorder
      const size = this.size
      return {
        [`${btnPrefix}`]: btnPrefix,
        [`${btnPrefix}-${color}`]: color,
        [`${btnPrefix}-text`]: text,
        [`${btnPrefix}-no-border`]: noBorder,
        [`${btnPrefix}-${size}`]: props.size.has(size)
      }
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="less" scoped>
.k-btn {
  padding: 8px 15px;
  background-color: #fff;
  background-color: #fff;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 rgba(#c1c1c1, 0.65);
  outline: none;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    border: 1px solid #4caf50;
    color: #4caf50;
  }
  + .k-btn {
    margin-left: 10px;
  }
  &.k-btn {
    &-primary {
      background-color: #4caf50;
      border: 1px solid #4caf50;
      color: #fff;
      &:hover {
        background-color: lighten(#4caf50, 5) !important;
        border: 1px solid lighten(#4caf50, 5) !important;
      }
    }
    &-green {
      background-color: #8bc34a;
      border: 1px solid #8bc34a;
      color: #fff;
      &:hover {
        background-color: lighten(#8bc34a, 5) !important;
        border: 1px solid lighten(#8bc34a, 5) !important;
      }
    }
    &-blue {
      background-color: #03a9f4;
      border: 1px solid #03a9f4;
      color: #fff;
      &:hover {
        background-color: lighten(#03a9f4, 5) !important;
        border: 1px solid lighten(#03a9f4, 5) !important;
      }
    }
    &-yellow {
      background-color: #ffc107;
      border: 1px solid #ffc107;
      color: #fff;
      &:hover {
        background-color: lighten(#ffc107, 5) !important;
        border: 1px solid lighten(#ffc107, 5) !important;
      }
    }
    &-red {
      background-color: #f44336;
      border: 1px solid #f44336;
      color: #fff;
      &:hover {
        background-color: lighten(#f44336, 5) !important;
        border: 1px solid lighten(#f44336, 5) !important;
      }
    }
    &-gray {
      background-color: #c1c1c1;
      border: 1px solid #c1c1c1;
      color: #fff;
      &:hover {
        background-color: lighten(#c1c1c1, 5) !important;
        border: 1px solid lighten(#c1c1c1, 5) !important;
      }
    }
    &-l {
      padding: 10px 20px;
    }
    &-s {
      padding: 5px 10px;
    }
    &-xs {
      padding: 2px 6px;
    }
    &-text,
    &-no-border {
      border: none;
      box-shadow: none;
      &:hover {
        border: none;
      }
    }
  }
}
// btn-color($color)
//   $renderColor = lookup('$' + $color + '-color')
//   background-color $renderColor
//   border 1px solid $renderColor
//   color $white-color // #fff
//   &:hover
//     background-color lighten($renderColor, 5) !important
//     border 1px solid lighten($renderColor, 5) !important

// .{$button-prefix}
//   padding 8px 15px
//   background-color $white-color
//   border 1px solid $gray-color
//   border-radius $border-radius-size
//   box-shadow 0 1px 1px 0 $gray3-color
//   outline none
//   cursor pointer
//   font-size $font-size-mini
//   &:hover
//     border 1px solid $primary-color
//     color $primary-color
//   +.{$button-prefix}
//     margin-left 10px
//   &.{$button-prefix}
//     &-primary
//       btn-color('primary')
//     &-green
//       btn-color('green')
//     &-blue
//       btn-color('blue')
//     &-yellow
//       btn-color('yellow')
//     &-red
//       btn-color('red')
//     &-gray
//       btn-color('gray')
//     &-l
//       padding 10px 20px
//     &-s
//       padding 5px 10px
//     &-xs
//       padding 2px 6px
//     &-text, &-no-border
//       border none
//       box-shadow none
//       &:hover
//         border none
</style>