// post the selected product

import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_SUCCESS,
} from "../types/cartTypes";

export const addToCartRequest = (product) => ({
  type: ADD_TO_CART_REQUEST,
  payload: product,
});
export const addToCartRequestSuccess = (success) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: success,
});
export const addToCartRequestFailure = (error) => ({
  type: ADD_TO_CART_FAILURE,
  payload: error,
});
