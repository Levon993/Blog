import Vue from "vue";
import Router from 'vue-router'
// import store from '../store/store'
// import  guest from './middleware/guest'
import  IsSubscribeed from './middleware/IsSubscribeed'
Vue.use(Router)


import LoginLayout from '../layouts/LoginLayout'
import MainLayout from '../layouts/MainLayout'
import RegisterForm from '../components/RegisterForm'
import  auth from './middleware/auth'
const router = new Router({
    mode:"history",
    routes: [
        {

            path: '/dashboard',
            component:MainLayout,
            name:'dashboard',
            // meta: {
            //     middleware:[
            //         auth
            //     ]
            // },

            children: [
                {
                    // UserProfile will be rendered inside User's <router-view>
                    // when /user/:id/profile is matched
                    path: '',
                    component: () => import('../components/Home'),
                    meta: {
                        middleware:[
                            auth
                        ]
                    }
                },
                {
                    // UserProfile will be rendered inside User's <router-view>
                    // when /user/:id/profile is matched
                    path: '/logs/list',
                    component: () => import('../components/LogsComponent'),
                    meta: {
                        middleware:[
                            auth
                        ]
                    }
                },


            ]


        },
        {

            path: '/',
            // component: () => import('../components/TetsNav'),

            component:() => import('../layouts/index/indexLayout'),
            name:'index',


            children: [
                {
                    path: '',
                    component: () => import('../components/Index'),

                },


            ]


        },
        {

            path: '/register',
            component:RegisterForm,

        },


        {
            path:'/login',
            component:()=> import('../components/LoginForm'),
            name: 'login',
            // meta: {
            //     middleware:[
            //         guest
            //     ]
            // }


        },
        {
            path:'/profile',
            component:()=> import('../components/UserComponent'),
            name: 'login',
        },
        {
            path:'/post/create',
            component:()=> import('../components/CreatePostForm'),
            name: 'login',
        },
        // {
        //     path:'/post/index',
        //     component:()=> import('../components/index'),
        //     name: 'index',
        // }
    ]

})

function nextFactory(context, middleware, index){
    const subsequentMiddleware = middleware[index]
    if(!subsequentMiddleware){
     return  context.next
    }
   return (...parameters) =>{
        context.next(...parameters)
       const nextMiddleware = nextFactory(context,middleware,index+1)
       subsequentMiddleware({...context, next:nextMiddleware})
   }
}
router.beforeEach((to, from, next)=>{
  if(to.meta.middleware){
      const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware]
      const context = {from, next,router, to}
      const nextMiddleware = nextFactory(context, middleware,1)
      return middleware[0]({...context, next:nextMiddleware})
  }
    return next()
})

export default router
