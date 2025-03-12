import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_DETAILS,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILURE,
} from "../types/productTypes";

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

// for a particular product details
export const fetchProductDetails = (id) => ({
  type: FETCH_PRODUCT_DETAILS,
  payload: id,
});
export const fetchProductDetailsSuccess = (product) => ({
  type: FETCH_PRODUCT_DETAILS_SUCCESS,
  payload: product,
});
export const fetchProductDetailsFailure = (error) => ({
  type: FETCH_PRODUCT_DETAILS_FAILURE,
  payload: error,
});
