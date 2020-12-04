import * as actionTypes from '../constants';

const initialState = {
  orders: [],
};
const update = (orders, updateOrder) => {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i]._id === updateOrder._id) {
      orders[i] = updateOrder;
    }
  }
  return orders;
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case actionTypes.UPDATE_ORDER:
      return {
        ...state,
        orders: update(state.orders, action.payload),
      };
    case actionTypes.SEARCH_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case actionTypes.DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order._id !== action.payload),
      };
    default:
      return state;
  }
};
