import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta:["首页"],
    component: HomeView,
    children:[
      {path:"",meta:[],name:"home",component:()=>import("@/views/Homes/HomeIndex.vue")},
      {path:"2-1",meta:["文章管理","文章列表"],component:()=>import("@/views/Homes/HomeUser.vue")},
      {path:"2-2",meta:["文章管理","多层路由示例"],component:()=>import("@/views/Homes/HomeShop.vue")},
    ]
  },
  {
    path:"/login",
    name:"MyLogin",
    component:()=>import("../views/MyLogin.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach(function(to,from,next){
  console.log(to,from)
  if(to.path==="/login"){ 
    next()
  }else{
    let token = localStorage.getItem("token")
    if(!token)return next({path:"/login"})
    if(token)return next()
  }
})

export default router;
