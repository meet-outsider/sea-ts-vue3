import request from "@/utils/request";

export function login(data: { username: string, password: string }) {
    return request.post("/login", data)
}

export function getInfo() {
    return request.get("/get_info")
}

export function hello() {
    return request.get("/hello")
}

export function getRoutes() {
    return request.get("/routes")
}
