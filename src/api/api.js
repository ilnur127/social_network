import axios from "axios"
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1104c621-7781-4638-ae68-0608d4190620'
    }
})

export const UsersApi = {
    async apiGetUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`).then(res => res.data)
    },
    async apiGetUserInfo(userId) {
        return instance.get(`profile/${userId}`).then(res => res.data)
    },
    async apiOnFollow(id) {
        return instance.post(`follow/${id}`).then(res => res.data)
    },
    async apiOnUnollow(id) {
        return instance.delete(`follow/${id}`).then(res => res.data)
    }
}

export const AuthApi = {
    async apiAuthMe() {
        return instance.get('auth/me').then(res => res.data)
    }
}
