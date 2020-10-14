import * as actionTypes from "../constants";
const initialState = {
  products: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payloads.products
      }
    default:
      return state;
  }
}