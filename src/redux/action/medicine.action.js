import { BASE_URL } from "../../baseUrl";
import * as ActionTypes from "../ActionType"

export const Medicinedata = () => (dispatch) => {
  try {
    dispatch(loadingMedicine())

    setTimeout(function () {
      fetch(BASE_URL + 'medicines')
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
        .then(medicines => dispatch({ type: ActionTypes.GET_MEDICINE, payload: medicines }))
        .catch(error => dispatch(errorMedicine(error.message)))
    }, 2000)


  } catch (error) {
    dispatch(errorMedicine(error))
    console.log(error);
  }
}

export const postMedicine = (data) => (dispatch) => {
  try {

    dispatch(loadingMedicine())

    setTimeout(function () {
      fetch(BASE_URL + 'medicines', {
        method: 'POST', // or 'PUT'
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
        .then(medicines => dispatch({ type: ActionTypes.POST_MEDICINE, payload: medicines }))
        .catch(error => dispatch(errorMedicine(error.message)))
    }, 2000)
  } catch (error) {
    dispatch(errorMedicine(error))
  }
}

export const loadingMedicine = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_MEDICINE })
}

export const errorMedicine = (e) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_MEDICINE, payload: e })
}