import {createRouter, createWebHistory} from "vue-router";
const routes = [
    {
        path:'/auth/login',
        name:'login',
        component: () => import('../components/auth/login'),
        meta: {
            isLogin: false
        }
    },
    {
        path: '/',
        name: 'index',
        component: () => import('../components/index/index'),
    },
    {
        path: '/product',
        name: 'product',
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
router.beforeEach((to, from) => {
    if (from.meta.isLogin) {
        to.meta.isLogin = true
    }
})
