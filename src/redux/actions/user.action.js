import * as actionTypes from "../constants";
import axios from "../../helpers";
export const login = (user) => {
  return async(dispatch, _getState, { history }) => {
  dispatch({ type: actionTypes.LOGIN_REQUEST, })
  const res = await axios.post("/admin/login", { ...user })
  if (res.status === 200) {
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user))
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payloads: { token, user }
    })
    history.push('/')
  } else {
    if (res.status === 400) {
      dispatch({
        type: actionTypes.LOGIN_FAILUER,
        payloads: {
          err: res.data.error,
        }
      })
    }

  }
}
}
export const userLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payloads: {
          token,
          user
        }
      })
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAILUER,
        payloads: {
          err: "đăng nhập thất bại"
        }
      })
    }
  }
}
export const logout = () => {
  return async dispatch => {
    dispatch({ type: actionTypes.LOGOUT_REQUEST })
    const res = await axios.post("/admin/logout")
    if (res.status === 200) {
      localStorage.clear();
      dispatch({
        type: actionTypes.LOGOUT_SUCCESS,
      })
    } else {
      dispatch({ type: actionTypes.LOGOUT_FAILURE, payloads: { error: res.data.error } })
    }

  }
}
export const registerUser = (user) => {
  return async (dispatch,_getState, {history}) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST })
    const res = await axios.post("/admin/register", { ...user })
    if (res.status === 201) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(user))
      const { message } = res.data;
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payloads: { 
          message: message
         }
      })
      history.push("/");
    } else {
      if (res.status === 400) {
        dispatch({
          type: actionTypes.REGISTER_FAILURE,
          payloads: {
            err: res.data.error,
          }
        })
      }

    }
  }
}