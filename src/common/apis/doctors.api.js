import { deleteReuest, getReuest, postReuest, putReuest } from "../request"


export const getDoctorsdata = (data) => {
    return getReuest('doctors')
}

export const postDoctorsdata = (data) => {
    return postReuest('doctors',data)
}

export const deleteDoctorsdata = (id) => {
    return deleteReuest('doctors/', id)
}

export const editDoctorsdata = (data) => {
    return putReuest('doctors/', data)
}