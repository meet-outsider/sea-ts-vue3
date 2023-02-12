import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/routes',
        component: () => import("@/views/routes/index.vue")
    },
    {
        path: '/',
        component: () => import("@/views/dashboard.vue")
    },
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
