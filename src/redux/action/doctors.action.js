import { BASE_URL } from "../../baseUrl";
import { getDoctorsdata } from "../../common/apis/medicine.api";
import * as ActionTypes from "../ActionType"

export const Doctorsdata = () => (dispatch) => {
  try {
    dispatch(loadingDoctors())

    // getDoctorsdata()
    // .then(data => dispatch({ type: ActionTypes.GET_DOCTORS, payload: data.data }))

    setTimeout(function () {
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
    }, 2000)


  } catch (error) {
    dispatch(errorDoctors(error.message))
    console.log(error.message);
  }  
}

export const postDoctors = (data) => (dispatch) => {
  try {

    dispatch(loadingDoctors())

    setTimeout(function () {
      fetch(BASE_URL + 'doctors', {
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
        .then(doctors => dispatch({ type: ActionTypes.POST_DOCRORS, payload: doctors }))
        .catch(error => dispatch(errorDoctors(error.message)))
    }, 2000)
  } catch (error) {
    dispatch(errorDoctors(error.message))
  }
}

export const deleteDoctors = (id) => (dispatch) => {
  try {
    fetch(BASE_URL + 'doctors/' + id , {
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
    .then(dispatch({ type: ActionTypes.DELETE_DOCTORS, payload: id }))
    .catch(error => dispatch(errorDoctors(error.message)))
  } catch (error) {
    dispatch(errorDoctors(error.message))
  }
}

export const editDotors = (data) => (dispatch) => {
  try {
    fetch(BASE_URL + 'doctors/' + data.id , {
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
    .then(doctors => dispatch({ type: ActionTypes.EDIT_DOCTORS, payload: doctors }))
    .catch(error => dispatch(errorDoctors(error.message)))
  } catch (error) {
    dispatch(errorDoctors(error.message))
  }
}

export const loadingDoctors = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_DOCTORS})
}

export const errorDoctors = (e) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_DOCTORS, payload: e })
}