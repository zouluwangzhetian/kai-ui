// 导入组件，组件必须声明 name
import radio from "./radio.vue";

// 为组件提供 install 安装方法，供按需引入
radio.install = function(Vue) {
  Vue.component(radio.name, radio);
};

// 默认导出组件
export default radio;
