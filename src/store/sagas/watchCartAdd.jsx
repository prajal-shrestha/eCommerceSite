import axios from "axios";

const addToCartAPI = async (product) => {
  try {
    const response = await axios.post(
      "https://api.example.com/products",
      product,
      {
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

function* addToCartSaga(action) {
  try {
    const response = yield call(addToCartAPI, action.payload);
    yield put(addToCartRequestSuccess(response));
  } catch (error) {
    yield put(addToCartRequestFailure(error.message));
  }
}

export default function* watchProductSaga() {
  yield takeLatest(ADD_TO_CART_REQUEST, addToCartSaga);
  //   yield takeLatest(FETCH_PRODUCT_DETAILS, fetchProductDetailsSaga);
}
