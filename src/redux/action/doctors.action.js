import { BASE_URL } from "../../baseUrl";
import * as ActionTypes from "../ActionType"

export const Doctorsdata = () => (dispatch) => {
  try {
    // dispatch(loadingDoctors())

    // setTimeout(function () {
      fetch(BASE_URL + 'doctors')
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
        .then(doctors => dispatch({ type: ActionTypes.GET_DOCTORS, payload: doctors }))
        .catch(error => dispatch(errorDoctors(error.message)))
    // }, 2000)


  } catch (error) {
    dispatch(errorDoctors(error.message))
    console.log(error);
  }  
}

export const loadingDoctors = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_DOCTORS})
}

export const errorDoctors = (e) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_DOCTORS, payload: e })
}