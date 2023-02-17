import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import("@/views/index.vue")
    },
    {
        path: '/dashboard',
        component: () => import("@/views/dashboard.vue")
    },
    {
        path: '/login',
        component: () => import("@/views/login.vue")
    },
    {
        path: '/registry',
        component: () => import("@/views/registry.vue")
    },
]
export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
