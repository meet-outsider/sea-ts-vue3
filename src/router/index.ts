import {createRouter, createWebHistory} from "vue-router"
import Index from "@/views/dashboard/index.vue"
import Layout from '@/layout/Layout.vue'

export const loginRoutes = {
    name: "login",
    path: '/login',
    meta: {
        title: '登陆'
    },
    component: () => import("@/views/login/index.vue")
}
export const notFound = {
    path: '/:pathMatch(.*)',
    redirect: '/',
    hidden: true
}
export const pubRoutes = {
    name: 'layout',
    path: '/',
    component: Layout,
    children: [
        {
            path: '/',
            component: Index
        },
        {
            path: 'index',
            component: Index
        },
        {
            path: 'dashboard',
            component: Index
        }
    ]
}
export const router = createRouter({
    history: createWebHistory(),
    routes: [loginRoutes, pubRoutes]
})

export default router
