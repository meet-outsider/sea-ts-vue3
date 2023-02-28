import {axiosInstance, RequestOption} from "@/config/axios";
import {AxiosResponse} from "axios";
// 封装请求方法
const request = async <T>(
    options: RequestOption,
    data?: any,
): Promise<AxiosResponse<T>> => {
    const {headers, ...rest} = options;

    try {
        const response = await axiosInstance({
            headers: {
                ...axiosInstance.defaults.headers.common,
                ...headers,
            },
            ...rest,
            data,
        });

        return response;
    } catch (error) {
        throw error;
    }
};

const get = async <T>(
    url: string,
    options: RequestOption = {}
): Promise<AxiosResponse<T>> => {
    return request<T>({...options, url, method: 'GET'});
};

const post = async <T>(
    url: string,
    data: any,
    options: RequestOption = {}
): Promise<AxiosResponse<T>> => {
    return request<T>({...options, url, method: 'POST'}, data);
};

const put = async <T>(
    url: string,
    data: any,
    options: RequestOption = {}
): Promise<AxiosResponse<T>> => {
    return request<T>({...options, url, method: 'PUT'}, data);
};

const del = async <T>(
    url: string,
    options: RequestOption = {}
): Promise<AxiosResponse<T>> => {
    return request<T>({...options, url, method: 'DELETE'});
};
export default {
    get, post, put, del
}
