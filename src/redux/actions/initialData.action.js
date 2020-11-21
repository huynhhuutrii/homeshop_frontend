import * as actionTypes from '../constants';
import axios from '../../helpers';
export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axios.get('/initialdata');
    if (res.status === 200) {
      const { categories, products } = res.data;
      dispatch({
        type: actionTypes.GET_ALL_CATEGORY_SUCCESS,
        payloads: { categories },
      });
      dispatch({
        type: actionTypes.GET_ALL_PRODUCT_SUCCESS,
        payloads: { products },
      });
    }
  };
};
