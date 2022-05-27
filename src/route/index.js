import { createRouter,createWebHashHistory} from "vue-router";
const routes = [
    { path: "/", redirect: "/home" },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
