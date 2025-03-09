import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import fetchDataReducer from "./reducers/FetchDataReducer";
import watchFetchData from "./sagas/FetchDataSaga";
import { configureStore } from "@reduxjs/toolkit";

// Combine reducers
const rootReducer = combineReducers({
  data: fetchDataReducer,
});

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run the saga
sagaMiddleware.run(watchFetchData);

export default store;
