import { takeEvery, call, put } from "redux-saga/effects";
import {
  fetchDataSuccess,
  fetchDataFailure,
} from "../actions/FetchDataActions";
import axios from "axios";

// API call function
const fetchDataFromApi = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

// Worker Saga: Handles the API call
function* fetchData() {
  try {
    const data = yield call(fetchDataFromApi); // Perform the API call
    yield put(fetchDataSuccess(data)); // Dispatch success action
  } catch (error) {
    yield put(fetchDataFailure(error.message)); // Dispatch failure action
  }
}

export default function* watchFetchData() {
  yield takeEvery("FETCH_DATA_REQUEST", fetchData);
}
