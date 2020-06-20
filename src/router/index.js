import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page from '@/components/page'
import look from '@/components/look'
import xhdq from '@/components/xhdq'
import Registrationpage from '@/components/Registrationpage'
import Signin from '@/components/Signin'
import header from '@/components/header'
import coumt from '@/components/coumt'
import store from '@/store'
const user = {
  template: `
   <div>
    <h1>啊哈哈</h1>
    <router-view/>
   </div>
`
}
const erziyi = {
  template: `
   <div>
    <h1>儿子</h1>
   </div>

`
}
const erzier = {
  template: `
   <div>
    <h1>儿媳</h1>
   </div>
`
}
Vue.use(Router)

let router = new Router({
  mode: "history",
  linkActiveClass: 'activeclass',
  routes: [
    {
      path: '/',
      redirect: '/header'
    },
    {
      path: '/xhdq',
      name: 'xhdq',
      component: xhdq
    },
    {
      path: '/page/:id',
      name: 'kk',
      component: page
    },
    {
      path: '/look',
      name: 'look',
      component: look
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      children: [{
        path: 'erziyi',
        component: erziyi
      },
      {
        path: 'erzier',
        component: erzier
      }
      ]
    },
    // 头部
    {
      path: '/header',
      name: 'header',
      component: header
    },
    // 注册页面
    {
      path: '/Registrationpage',
      name: 'Registrationpage',
      component: Registrationpage
    },
    // 登录页面
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/coumt',
      name: 'coumt',
      component: coumt
    }
  ]
})
//导航守卫
//使用router. beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/Signin') {
    next();
  } else {
    let _token = localStorage.getItem('Authorization');
    // let _token = store.state.Authorization;
    if (_token === 'null' || _token === '') {
      next('/Signin');
    } else {
      next();
    }
  }
});
export default router
