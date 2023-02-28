import router from "@/router";
import {useUserStore} from "@/pinia/modules/user";

const routeAllPathToCompMap = import.meta.glob(`./views/**/*.vue`);
import message from "@/utils/message";

export function addRoutes() {
    let userStore = useUserStore()
    // @ts-ignore
    if (userStore.getUser.routes == null) {
        message.error("路由不存在!。。。重新获取")
        // @ts-ignore
        userStore.getUser.routes.forEach(({component, path, name}) => {
            message.success("路由不存在!。。。重新获取")
            router.addRoute('layout', {
                path: path,
                name: name,
                component: routeAllPathToCompMap[`./views${component}.vue`]
            })
        })
    }
}

export function dynAddRoutes() {
    // @ts-ignore
    console.log('pinia里的路由', useUserStore().getUser.routes)
    console.log("路由已经添加过了！")
    // @ts-ignore
    if (useUserStore().getUser.routes == null) {

    }
    addRoutes()
}

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
    // console.log('routes', router.getRoutes())
    // 需要放行的路由
    // if (to.path === '/') {
    //     next()
    //     return
    // }
    // // 验证是否需要登录
    // if (useUserStore().getUser === null) {
    //     message.error("用户未登陆!")
    //     next('/')
    //     return
    // }
    // dynAddRoutes()
    next()
})

// 全局后置钩子
router.afterEach((to, from) => {
    // ...
})

// // 全局解析守卫
// router.beforeResolve((to, from, next) => {
//     // ...
// })
