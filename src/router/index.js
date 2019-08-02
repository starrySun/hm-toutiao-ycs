//引入 下载好的 vue-router 包
import VueRouter from "vue-router";
//引入Vue
import Vue from "vue";
//引入login组件
import Login from "@/views/login";
Vue.use(VueRouter);
//实例化对象
const router = new VueRouter({
  routes: [{ path: "/login", name: "login", component: Login }]
});
//导出router
export default router;
