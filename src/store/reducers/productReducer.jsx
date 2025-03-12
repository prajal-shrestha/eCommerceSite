import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_DETAILS,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILURE,
} from "../types/productTypes";

const initialState = {
  user: null,
  products: [],
  loading: false,
  error: null,
  productDetails: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_PRODUCT_DETAILS:
      return { ...state, loading: true };
    case FETCH_PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, productDetails: action.payload };
    case FETCH_PRODUCT_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
