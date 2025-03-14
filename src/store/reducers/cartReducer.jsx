import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
} from "../types/cartTypes";

const initialState = {
  loading: false,
  error: null,
  response: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        response: null,
      };

    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload,
        error: null,
      };

    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        response: null,
      };

    default:
      return state;
  }
};

export default cartReducer;
