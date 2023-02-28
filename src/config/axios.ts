import axios, {AxiosRequestConfig} from "axios";
import storage from "@/utils/localstroge";
import message from "@/utils/message";

export interface RequestOption extends AxiosRequestConfig {
    headers?: { [key: string]: string };
}

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

const skipUrls = ["/login", "/registry"]
// 添加请求拦截器
axiosInstance.interceptors.request.use(function (config) {
    const token = storage.getToken();
    if (token && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;

}, function (error) {
    message.error(error)
    // 对请求错误做些什么
    // return Promise.reject(error);
    return error;
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(response => {
        // 如果响应状态码是 200，直接返回响应数据
        if (response.status === 200) {
            return response;
        }
        message.info(`${response.status}: ${response.data}`);
        // 如果响应状态码是其他值，抛出异常
        throw new Error(`HTTP error status ${response.status}`);
    },
    error => {
        // 处理请求错误
        let {status, data} = error.response
        if (status === 500){
            throw error;
        }
        message.error(`${status}: ${data}`);
    });
