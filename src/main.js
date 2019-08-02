// main.jsn 入口文件
// 职责1：引入需要依赖的模块 （js ,包,css,其他资源）
// 职责2:创建一个根Vue 实例
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//引入 router 并挂载到 Vue上
//@是一个路径的别名  是src路径  在vue-cli项目下有效   index 是目录的索引文件  默认使用的索引文件  index.js index.vue index.json
import router from "@/router";
//挂载全局样式
import "./styles/index.less";

//产品级别提示  不开启 开发阶段 提示越详细越好 开发级别提示
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
