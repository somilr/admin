import { BASE_URL } from "../../baseUrl";
import { getMedicinedata } from "../../common/apis/medicine.api";
import * as ActionTypes from "../ActionType"

export const Medicinedata = () => (dispatch) => {
  try {
    dispatch(loadingMedicine())

    getMedicinedata()
    .then((data)=> dispatch({ type: ActionTypes.GET_MEDICINE, payload: data.data }))

    // setTimeout(function () {
    //   fetch(BASE_URL + 'medicines')
    //     .then(response => {
    //       if (response.ok) {
    //         return response;
    //       } else {
    //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         throw error;
    //       }
    //     },
    //       error => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //       })
    //     .then(response => response.json())
    //     .then(medicines => dispatch({ type: ActionTypes.GET_MEDICINE, payload: medicines }))
    //     .catch(error => dispatch(errorMedicine(error.message)))
    // }, 2000)


  } catch (error) {
    dispatch(errorMedicine(error.message))
    console.log(error);
  }
}

export const postMedicine = (data) => (dispatch) => {
  try {

    dispatch(loadingMedicine())

    getMedicinedata(data)
    .then((data)=> dispatch({ type: ActionTypes.POST_MEDICINE, payload: data.data }))

    // setTimeout(function () {
    //   fetch(BASE_URL + 'medicines', {
    //     method: 'POST', // or 'PUT'
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then(response => {
    //       if (response.ok) {
    //         return response;
    //       } else {
    //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         throw error;
    //       }
    //     },
    //       error => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //       })
    //     .then(response => response.json())
    //     .then(medicines => dispatch({ type: ActionTypes.POST_MEDICINE, payload: medicines }))
    //     .catch(error => dispatch(errorMedicine(error.message)))
    // }, 2000)
  } catch (error) {
    dispatch(errorMedicine(error))
  }
}

export const deleteMedicine = (id) => (dispatch) => {
  try {
    fetch(BASE_URL + 'medicines/' + id , {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(dispatch({ type: ActionTypes.DELETE_MEDICINE, payload: id }))
    .catch(error => dispatch(errorMedicine(error.message)))
  } catch (error) {
    dispatch(errorMedicine(error))
  }
}

export const editMedicine = (data) => (dispatch) => {
  try {
    fetch(BASE_URL + 'medicines/' + data.id , {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(medicines => dispatch({ type: ActionTypes.EDIT_MEDICINE, payload: medicines }))
    .catch(error => dispatch(errorMedicine(error.message)))
  } catch (error) {
    dispatch(errorMedicine(error.message))
  }
}

export const loadingMedicine = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_MEDICINE })
}

export const errorMedicine = (e) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_MEDICINE, payload: e })
}