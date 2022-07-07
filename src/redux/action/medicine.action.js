import { BASE_URL } from "../../baseUrl";
import * as ActionTypes from "../ActionType"

export const Medicinedata = () => (dispatch) => {
  
    try{
      setTimeout(function() {

        dispatch(loadingMedicine())

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
      },2000)
    
     
    }catch (error) {
      dispatch(errorMedicine(error))
      console.log(error);
    }    
}

export const postMedicine = () => (dispatch) => {
 try {
  setTimeout(function() {

    dispatch(loadingMedicine())

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
  .then(medicines => dispatch({ type: ActionTypes.POST_MEDICINE, payload: medicines }))
  .catch(error => dispatch(errorMedicine(error.message)))
  },2000)
 }catch (error) {
  dispatch(errorMedicine(error))
 }
}
 
export const loadingMedicine = () => (dispatch) => {
dispatch({ type: ActionTypes.LOADING_MEDICINE})
}

export const errorMedicine = () => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_MEDICINE})
}