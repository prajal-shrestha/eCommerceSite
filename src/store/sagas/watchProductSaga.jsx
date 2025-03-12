import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductDetailsSuccess,
} from "../actions/productActions";
import axios from "axios";
import { FETCH_PRODUCT_DETAILS, FETCH_PRODUCTS } from "../types/productTypes";

// API call function
const fetchProductsApi = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

const fetchProductDetailsApi = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

// Worker Saga: Handles the API call
function* fetchProductsSaga() {
  try {
    const products = yield call(fetchProductsApi); // Perform the API call
    yield put(fetchProductsSuccess(products)); // Dispatch success action
  } catch (error) {
    yield put(fetchProductsFailure(error.message)); // Dispatch failure action
  }
}

function* fetchProductDetailsSaga(action) {
  try {
    const product = yield call(fetchProductDetailsApi, action.payload);
    yield put(fetchProductDetailsSuccess(product));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

export default function* watchProductSaga() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
  yield takeLatest(FETCH_PRODUCT_DETAILS, fetchProductDetailsSaga);
}
