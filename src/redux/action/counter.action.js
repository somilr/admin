import * as ActionTypes from "../ActionType"

export const incrementCounter = () => (dispech) => {
    dispech({type:ActionTypes.INCREMENT_COUNTER});
}

export const decrementCounter = () => (dispech) => {
    dispech({type:ActionTypes.DECREMENT_COUNTER});
}




