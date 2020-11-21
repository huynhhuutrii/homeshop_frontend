import axios from '../../helpers';
import * as actionTypes from '../constants';
export const updateOrder = (idOrder) => {
  return async (dispatch) => {
    const res = await axios.put('/order/update', { idOrder });
    dispatch({ type: actionTypes.UPDATE_ORDER, payload: res.data.updateOrder });
  };
};
export const getAllOrder = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/order/all');
      dispatch({ type: actionTypes.GET_ALL_ORDER, payload: res.data.allOrder });
    } catch (err) {
      console.log(err);
    }
  };
};
