import { BASE_URL } from "../baseUrl";
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
  });

export const axiosRequest = (config) => {
    return axiosInstance.request(config)   
}

export const getReuest = (path) => {
    return axiosRequest({
        url: path,
        method: 'GET',
        method: 'POST',
    })
}