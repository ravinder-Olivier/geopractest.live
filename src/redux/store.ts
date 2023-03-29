import { createStore, combineReducers } from '@reduxjs/toolkit'
// import languageReducer from "../reducers/languageReducer";
import globeReducer from "./reducers/globeReducer";

const rootReducer = combineReducers({ globe: globeReducer });

const store = createStore(rootReducer);

export default store;