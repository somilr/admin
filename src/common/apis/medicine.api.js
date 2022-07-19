import { deleteReuest, getReuest, postReuest, putReuest } from "../request"


export const getMedicinedata = (data) => {
    return getReuest('medicines')
}

export const postMedicinedata = (data) => {
    return postReuest('medicines',data)
}

export const deleteMedicinedata = (id) => {
    return deleteReuest('medicines/', id)
}

export const editMedicinedata = (data) => {
    return putReuest('medicines/', data)
}