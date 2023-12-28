// actions creators
// It is function which will return a object
import { INCREASE, DECREASE, RESET } from "./actionTypes.js";

export const increase = () => {
    return {
        type: INCREASE,
    }
}

export const decrese = () => {
    return {
        type: DECREASE,
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}