import * as actionTypes from "../constants";
import axios from "../../helpers";
export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOGIN_REQUEST, })
    const res = await axios.post("/admin/login",{...user})
    if(res.status === 200){
      const { token, user } = res.data;
      localStorage.setItem("token",token);
      localStorage.setItem("user",JSON.stringify(user))
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payloads: { token, user }
      })
    } else {
      if( res.status === 400 ){
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
export const userLoggedIn = () =>{
  return async(dispatch) => {
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
     }else{
        dispatch({
            type: actionTypes.LOGIN_FAILUER,
            payloads: {
                err: "đăng nhập thất bại"
            }
        })
     }
  }
  
}