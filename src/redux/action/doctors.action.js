import { BASE_URL } from "../../baseUrl";
import * as ActionTypes from "../ActionType"

export const Doctorsdata = () => (dispatch) => {
    try{
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
          .then(Doctors => dispatch({ type: ActionTypes.GET_DOCTORS, payload: Doctors }))
        }catch (error) {
            console.log(error);
        }   
}