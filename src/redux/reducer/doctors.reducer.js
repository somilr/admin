import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    doctors: [],
    error: ''
}

export const doctorsReducer = (state = initalState, action) => {
    console.log(action.type, action.payload,state);

    switch (action.type) {
        case ActionTypes.LOADING_DOCTORS:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case ActionTypes.GET_DOCTORS:
            return {
                ...state,
                isLoading: false,
                doctors: action.payload,
                error: ''
            }
        case ActionTypes.POST_DOCRORS:
            return {
                ...state,
                isLoading: false,
                doctors: state.doctors.concat(action.payload),
                error: ''
            }
        case ActionTypes.DELETE_DOCTORS:
            return {
                ...state,
                isLoading: false,
                doctors: state.doctors.filter((l) => l.id !== action.payload),
                error: ''
            }
        case ActionTypes.EDIT_DOCTORS:
                return {
                    ...state,
                    isLoading: false,
                    doctors: state.doctors.map((l) => {
                        if (l.id === action.payload.id) {
                            return action.payload;
                        } else {
                            return l;
                        }
                    }),
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