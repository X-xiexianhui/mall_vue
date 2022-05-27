import {createRouter, createWebHistory} from "vue-router";
const routes = [
    {
        path:'/auth/login',
        name:'login',
        component: () => import('../components/auth/login')
    },
    {
        path: '/',
        name: 'index',
        component: () => import('../components/index/index'),
        meta:{
            isLogin: false
        }
    },
    {
        path: '/product',
        name: 'index',
        component: () => import('../components/index/index'),
        meta:{
            isLogin: false
        }
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
router.beforeEach((to, from,next) => {
    if ( from.meta.isLogin && to.path !== '/auth/login') {
       to.meta.isLogin = true
        next()
    } else if (to.path === '/auth/login') {
        next()
    }else {
        return {
            path: '/auth/login',
            // 保存我们所在的位置，以便以后再来
            query: { redirect: to.fullPath },
        }
    }
})
