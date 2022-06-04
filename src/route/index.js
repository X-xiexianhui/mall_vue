import {createRouter, createWebHistory} from "vue-router";
const routes = [
    {
        path:'/auth/login',
        name:'login',
        component: () => import('../components/auth/login'),
    },
    {
        path: '/',
        name: 'index',
        component: () => import('../components/index/index'),
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('../components/backend/productList')
    },
    {
        path: '/query',
        name: 'query',
        component:() => import('../components/query/query')

    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
