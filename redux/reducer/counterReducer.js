import { INCREASE, DECREASE, RESET } from "../actions/actionTypes.js";

let initialState = 0;

function counterReducer(state=initialState, x) {
    // state 4, action = {type: 'INCREASE',}

    switch(action.type) {
        case INCREASE:
            return state+1;

        case DECREASE:
            return state-1;

        case RESET:
            return initialState;

        default:
            return state;

    }
}

// counterReducer()
// counterReducer(4, increase())
// counterReducer(5, deceease())
// counterReducer(4, reset())