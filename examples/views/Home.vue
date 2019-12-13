<template>
  <div class="home">
    <colorPicker v-model="color" v-on:change="headleChangeColor"></colorPicker>
    <p>基本</p>
    <div class="button">
      <div class="defal-box">
        <k-button>默认</k-button>
        <k-button text>文字</k-button>
        <k-button :color="'primary'">有边框</k-button>
        <k-button noBorder :color="'primary'">没有边框</k-button>
      </div>
      <p>颜色</p>
      <div class="defal-box">
        <k-button>默认</k-button>
        <k-button :color="'primary'">主色系</k-button>
        <k-button :color="'green'">主色系</k-button>
        <k-button :color="'blue'">主色系</k-button>
        <k-button :color="'yellow'">主色系</k-button>
        <k-button :color="'red'">主色系</k-button>
        <k-button :color="'gray'">主色系</k-button>
      </div>
      <p>大小</p>
      <div class="defal-box">
        <k-button>默认</k-button>
        <k-button :size="'xs'" :color="'green'">小型按钮</k-button>
        <k-button :color="'primary'" :size="'s'">中型按钮</k-button>
        <k-button :color="'blue'" :size="'l'">大型按钮</k-button>
      </div>
      <p>无边框大小</p>
      <div class="defal-box">
        <k-button noBorder>默认</k-button>
        <k-button noBorder :size="'xs'" :color="'green'">小型按钮</k-button>
        <k-button noBorder :color="'primary'" :size="'s'">中型按钮</k-button>
        <k-button noBorder :color="'blue'" :size="'l'">大型按钮</k-button>
      </div>
    </div>
    <div class="swich">
      <div>switch</div>
      <span style="margin-right: 10px">{{swich}}</span>
      <k-switch v-model="swich" @input="changeSwich" @change="inputSwich">swich</k-switch>
      <span style="margin-right: 10px;margin-left: 30px">{{swich2}}</span>
      <k-switch v-model="swich2" :small="true">smallSwich</k-switch>
      <div>
        <div>
          <p>自定义true与false的值</p>
          <span style="margin-right: 10px">{{swich3}}</span>
          <k-switch v-model="swich3" :trueValue="1" :falseValue="2" @input="changeSwich">1/2</k-switch>
          <span style="margin-right: 10px;margin-left: 30px">{{swich4}}</span>
          <k-switch v-model="swich4" :trueValue="'yes'" :falseValue="'no'" @input="changeSwich">1/2</k-switch>
        </div>
      </div>
      <div class="radio">
        <p>{{radioVal.title ? radioVal : '请选择'}}</p>
        <k-radio v-model="radioVal" :value="param[0]" disabled>disabled</k-radio>
        <k-radio v-model="radioVal" :value="param[1]">click me2</k-radio>
        <k-radio v-model="radioVal" :value="param[2]">click me3</k-radio>
        <p>{{radioVal2}}</p>
        <k-radio v-model="radioVal2" :value="item.key" v-for="(item, index) in param" :key="item.key" :disabled="index==2?false:true">{{index==2?'disabled':'click me'}}</k-radio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      color: '#ff0000',
      swich: true,
      swich2: false,
      swich3: 2,
      swich4: 'yes',
      param: [
        { title: '选择1', key: 'a1', other: '其他值' },
        { title: '选择2', key: 'a2' },
        { title: '选择3', key: 'a3' }
      ],
      radioVal: {},
      radioVal2: 'a3'
    }
  },
  methods: {
    headleChangeColor() {
      console.log('颜色改变')
    },
    changeSwich(val) {
      console.log(this.swich)
    },
    inputSwich(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="less" scoped>
.defal-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
