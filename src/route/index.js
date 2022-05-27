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
        name: 'product',
        meta:{
            isLogin: false
        }
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
router.beforeEach((to, from) => {
    if (to.path !== '/' && to.path !== '/auth/login') {
        if (from.meta.isLogin) {
            to.meta.isLogin = true
        } else {
            return {
                path: '/'
            }
        }
    }
})
