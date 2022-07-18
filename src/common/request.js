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
    })
}

export const postReuest = (path, data) => {
    return axiosRequest({
        url: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
    })
}

export const deleteReuest = (path, id) => {
    return axiosRequest({
        url: path + id,
        method: 'DELETE',       
    })
}

// export const editReuest = (path, data) => {
//     return axiosRequest({
//         url: path + data.id,
//         method: 'PUT', 
//         headers: {
//             'Content-Type': 'application/json',
//           },
//         body: JSON.stringify(data),      
//     })
// }