import axios from "axios";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '538f01a5-832a-4f91-9ceb-8c782955407a',
    }
})

export const getUsersRequest = (page) => {
    return axiosInstance
        .get(`users?page=${page}&count=10`)
        .then(response => {
            return response.data;
        })
}

export const unFollowRequest = (userId) => {
    return axiosInstance
        .delete(`follow/${userId}`)
        .then(response => response.data)
}

export const followRequest = (userId) => {
    return axiosInstance
        .post(`follow/${userId}`)
        .then(response => response.data)
}