import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    medicine: [],
    error: ''
}

export const medicineReducer = (state=initalState, action) => {
    // console.log(action.type, action.payload);
    
    switch(action.type) {
        case ActionTypes.LOADING_MEDICINE:
            return {
                ...state,
               isLoading: true,
               medicine: [],
               error:''
            }
        case ActionTypes.GET_MEDICINE:
            return {
                ...state,
               isLoading: false,
               medicine: action.payload,
               error:''
            }
        default:
            return state;
    }
}