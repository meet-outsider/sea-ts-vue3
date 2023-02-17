import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import("@/views/dashboard/index.vue")
    },
    {
        path: '/dashboard',
        component: () => import("@/views/dashboard/index.vue")
    },

]
export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
