import * as actionTypes from '../constants';
const initialState = {
  products: [],
};
const updateProduct = (productList, product) => {
  for (let i = 0; i < productList.length; i++) {
    if (productList[i]._id === product._id) {
      productList[i] = product;
    }
  }
  return productList;
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payloads.products,
      };

    case actionTypes.ADD_NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case actionTypes.UPDATE_PRODUCT:
      const product = action.payload;
      return {
        ...state,
        products: updateProduct(state.products, product),
      };
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
