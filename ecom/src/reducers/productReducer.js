import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from '../constants/productConstants';
export const productListReducer = (initialState = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return initialState;
  }
};

export const productDetailReducer = (
  initialState = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true, ...initialState };
    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return initialState;
  }
};

export const productDeleteReducer = (initialState = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true, ...initialState };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return initialState;
  }
};
