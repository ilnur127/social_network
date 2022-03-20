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
    async apiOnFollow(id) {
        return instance.post(`follow/${id}`).then(res => res.data)
    },
    async apiOnUnollow(id) {
        return instance.delete(`follow/${id}`).then(res => res.data)
    }
}

export const ProfileApi = {
    async apiGetUserInfo(userId) {
        return instance.get(`profile/${userId}`).then(res => res.data)
    },
    async apiGetStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(res => res.data)
    },
    async apiUpdateStatus(status) {
        return instance.put(`profile/status/`, {status}).then(res => res.data)
    },
    async savePhoto(photo) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {headers: {
            'Content-Type': 'multipart/form-data'
        }}).then(res => res.data)
    }
}

export const AuthApi = {
    async apiAuthMe() {
        return instance.get('auth/me').then(res => res.data)
    },
    async login({email, password, rememberMe = false}) {
        return instance.post('auth/login', {email, password, rememberMe}).then(res => res.data)
    },
    async logout() {
        return instance.delete('auth/login').then(res => res.data)
    }
}
