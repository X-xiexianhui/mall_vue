import {createRouter, createWebHistory} from "vue-router";
const routes = [
    {
        path:'/auth/login',
        name:'login',
        component: () => import('../components/auth/login')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
