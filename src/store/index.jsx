import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import watchFetchData from "./sagas/watchProductSaga";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

// Combine reducers
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
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
