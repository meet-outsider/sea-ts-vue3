import {defineStore} from 'pinia';
import {getInfo, getRoutes, login} from "@/api/auth";
import storage from "@/utils/localstroge";
import message from "@/utils/message";
import {addRoutes, dynAddRoutes} from "@/permissions";

interface User {
    username: string;
    routes: [];
    isAddRoutes:boolean;
}

export const useUserStore = defineStore({
    id: 'user',
    state: (): { user: User | null } => ({
        user: null,
    }),
    getters: {
        getUser(): User | null {
            console.log('userStore:', this.user)
            return this.user;
        },
    },
    actions: {
        setUser(username: string, routes: [],isAddRoutes:boolean) {
            this.user = {username, routes,isAddRoutes}
        },
        async login(username: string, password: string) {
            const data = {username: username, password: password}
            // 登陆获取token并存储
            let loginRes = await login(data)
            storage.setToken(loginRes.data)
            message.success("登陆成功!")
            await this.refresh();

        },
        logout() {
            // 退出登录，清空用户信息
            this.user = null;
            storage.cleanToken()
        },
        // 刷新用户信息
        async refresh() {
            // 获取当前用户的信息和路由列表
            const infoRes = await getInfo();
            const routesRes = await getRoutes();
            // @ts-ignore
            await this.setUser(infoRes.data.username, routesRes.data,true);
            // await addRoutes()
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage,
                key: 'userInfo',//设置存储的key
            }
        ]
    },
});
