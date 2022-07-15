import { getReuest } from "../request"


export const getMedicinedata = (data) => {
    return getReuest('medicines')
}

export const getDoctorsdata = () => {
    return getReuest('doctors')
}