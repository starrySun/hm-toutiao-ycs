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
import Store from "@/store";

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
//  导航守卫
router.beforeEach((to, from, next) => {
  // // 如果是登陆路由放行
  // if (to.path === "/login") return next();
  // //如果登陆时，没有token 拦截
  // if (!Store.getUser().token) return next("/login");
  // next();
  if (to.path !== "/login" && !Store.getUser().token) return next("/login");
  next();
});
// router.beforeEach((to, from, next) => {
// // 1. 如果是登录路由  放行
// if (to.path === '/login') return next()
// // 2. 获取用户信息 如果没有 拦截登录
// if (!store.getUser().token) return next('/login')
// // 3. 放行
// next()
//   if (to.path !== "/login" && !store.getUser().token) return next("/login");
//   next();
// });
// 导出router
export default router;
