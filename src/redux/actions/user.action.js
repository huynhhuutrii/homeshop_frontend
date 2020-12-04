import * as actionTypes from '../constants';
import axios from '../../helpers';

export const getAllUser = () => {
  return async (dispatch) => {
    const res = await axios.get('/user/all');
    dispatch({ type: actionTypes.GET_ALL_USER, payload: res.data.users });
  };
};
export const deleteUser = (id) => {
  return async (dispatch) => {
    const res = await axios.post('/user/delete', { id });
    dispatch({ type: actionTypes.DELETE_USER, payload: id });
  };
};
export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOGIN_REQUEST });
    const res = await axios.post('/admin/login', { ...user });
    console.log(res.errors);
    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: { token, user },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: actionTypes.LOGIN_FAILUER,
          payload: {
            err: res.data.errors,
          },
        });
      }
    }
  };
};
export const userLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAILUER,
        payload: {
          err: 'đăng nhập thất bại',
        },
      });
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOGOUT_REQUEST });
    const res = await axios.post('/admin/logout');
    if (res.status === 200) {
      localStorage.clear();
      dispatch({
        type: actionTypes.LOGOUT_SUCCESS,
      });
    } else {
      dispatch({
        type: actionTypes.LOGOUT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
export const registerUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST });
    const res = await axios.post('/admin/register', { ...user });
    if (res.status === 201) {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(user));
      const { message } = res.data;
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: {
          message: message,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: actionTypes.REGISTER_FAILURE,
          payload: {
            err: res.data.error,
          },
        });
      }
    }
  };
};
