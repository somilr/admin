import { deleteReuest, editReuest, getReuest, postReuest } from "../request"


export const getMedicinedata = (data) => {
    return getReuest('medicines')
}

export const postMedicinedata = (data) => {
    return postReuest('medicines',data)
}

export const deleteMedicinedata = (id) => {
    return deleteReuest('medicines/', id)
}

