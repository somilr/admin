import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    doctors: [],
    error: ''
}

export const doctorsReducer = (state=initalState, action) => {
    console.log(action.type, action.payload);
    
    switch(action.type) {
        case ActionTypes.GET_DOCTORS:
            return {
                ...state,
               isLoading: false,
               doctors: action.payload,
               error:''
            }
        default:
            return state;
    }
}