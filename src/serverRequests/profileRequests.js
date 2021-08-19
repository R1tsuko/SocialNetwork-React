import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '538f01a5-832a-4f91-9ceb-8c782955407a',
    }
})

export const profileRequest = (userId) => {
    return axiosInstance
    .get(`profile/${userId}`)
    .then(response => response.data);
}