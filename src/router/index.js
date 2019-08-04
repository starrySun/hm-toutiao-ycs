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
// 引入404 页面
import Notfound from "@/views/404";
import Article from "@/views/article";

Vue.use(VueRouter);
//实例化对象
const router = new VueRouter({
  routes: [
    // 跳转路由 $router.push('/login') 或者 $router.push({name:'login'})
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "/",
          name: "welcome",
          component: Wellcome
        },
        {
          path: "/article",
          name: "article",
          component: Article
        }
      ]
    },
    // 路径 404
    {
      path: "*",
      name: "404",
      component: Notfound
    }
  ]
});
//导出router
export default router;
