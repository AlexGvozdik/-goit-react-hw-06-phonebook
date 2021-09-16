import rootReducer from './slicers';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:rootReducer,
});
export default store;

//// WITHOUT REDUX TOOLKIT
// import { createStore } from "redux";
// const store = createStore(rootReducer)

