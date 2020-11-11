import * as axios from "axios";
import Users from "../components/Users/Users";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
    headers: {
        "API-KEY": "87ecd64f-6f6b-4551-b530-fbc765cd5d83"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    follow(userId) {
       return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },

    getProfile(userId) {
        console.warn('Устаревший метод. Надо использовать profileAPI');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId) {
      return instance.get(`/profile/status/` + userId)
    },

    updateStatus(status) {
        return instance.put(`/profile/status`, {
            status: status
        });
    }


}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
}




