import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    doctors: [],
    error: ''
}

export const doctorsReducer = (state = initalState, action) => {
    console.log(action.type, action.payload);

    switch (action.type) {
        case ActionTypes.GET_DOCTORS:
            return {
                ...state,
                isLoading: false,
                doctors: action.payload,
                error: ''
            }
        case ActionTypes.GET_DOCTORS:
            return {
                ...state,
                isLoading: false,
                doctors: action.payload,
                error: ''
            }
        case ActionTypes.ERROR_DOCTORS:
            return {
                ...state,
                isLoading: false,
                doctors: [],
                error: action.payload
            }
        default:
            return state;
    }
}