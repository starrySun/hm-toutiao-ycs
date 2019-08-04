//引入 下载好的 vue-router 包
import VueRouter from "vue-router";
//引入Vue
import Vue from "vue";
//引入login组件
import Login from "@/views/login";
//引入Home组件
import Home from "@/views/home";
//引入wellcomme组件
import Wellcome from "@/views/wellcome";
Vue.use(VueRouter);
//实例化对象
const router = new VueRouter({
  routes: [
    { path: "/login", name: "login", component: Login },
    {
      path: "/",
      component: Home,
      children: [{ path: "/", name: "wellcome", component: Wellcome }]
    }
  ]
});
//导出router
export default router;
