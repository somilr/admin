import * as ActionTypes from "../ActionTypes"

  
export const  themeRenderer = (state, action) => {
    switch(action.type) {
    case ActionTypes.TOOGLE_THEME:
        return {
            ...state,
            them: action.payload
        }
        default:
            return state
    }

}