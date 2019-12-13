// 导入组件，组件必须声明 name
import kswitch from './switch.vue'

// 为组件提供 install 安装方法，供按需引入
kswitch.install = function (Vue) {
  Vue.component(kswitch.name, kswitch)
}

// 默认导出组件
export default kswitch