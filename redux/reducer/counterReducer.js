import { INCREASE, DECREASE, RESET } from "../actions/actionTypes.js";

let initialState = 0;

function counterReducer(state=initialState, action) {
    // state 4, action = {type: 'INCREASE',}

    switch(action.type) {
        case INCREASE:
            return state+1;

        case DECREASE:
            return state-1;

        case RESET:
            return initialState;


    }
}

// counterReducer.increment(4, {type: "INCREASE"})