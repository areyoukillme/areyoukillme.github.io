import Vue from 'vue'
import Router from 'vue-router'
import hellofuquan from '@/components/hellofuquan.vue'
import homeheader from '@/components/homeheader.vue'
import login from '../page/login.vue'
import menu from '../page/menu.vue'
import menugoods from '../page/menuchildren/goods.vue'
import menubrand from '../page/menuchildren/brand.vue'
import lazyload from '../page/indexchildren/lazyload.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/today',
      component: resolve=>require(['@/page/index.vue'],resolve),
      children:[{
          path: 'today',
          name: 'today',
          component: resolve=>require(['../page/indexchildren/today.vue'],resolve)
          },
          {
          path: 'fashion',
          name: 'fashion',
          component: resolve=>require(['../page/indexchildren/fashion.vue'],resolve)
          },
          {
          path: 'goodlist',
          name: 'goodlist',
          component: resolve=>require(['../page/indexchildren/goodlist.vue'],resolve)
          },
          {
          path: 'lazyload',
          name: 'lazyload',
          component: resolve=>require(['../page/indexchildren/lazyload.vue'],resolve)
          },


      ]
    
    },
 
    {
        path:'/login',
        name:'login',
        component:login,

    },
    {
        path:'/menu',
        name:'menu',
        redirect:'/menu/menugoods',
        component:menu,
        children:[
          {
            path:'menugoods',
            name:'menugoods',
            component:menugoods
          },
          {
            path:'menubrand',
            name:'menubrand',
            component:menubrand
          },
        ]
    },
 
  ]
})
