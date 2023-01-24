import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { initialState } from "./reducers/initialState";

const store = createStore(rootReducer, initialState);
// store.subscribe(() => console.log(store.getState()));

export default store;
