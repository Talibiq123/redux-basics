import store from "./redux/store.js";
import { increase, decrese, reset } from "./redux/actions/counterActions.js";

// getState() => it will return the current state of the store

console.log("initial value", store.getState()); // initial vslue of the state

// subscribe to store
store.subscribe(() => {
    console.log("current value", store.getState());
})


store.dispatch(increase());
store.dispatch(increase());
store.dispatch(decrese());
store.dispatch(increase());
store.dispatch(reset());

console.log("current value", store.getState());
