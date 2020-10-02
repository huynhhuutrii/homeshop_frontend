import * as actionTypes from "../constants";
const initialState = {
  token: null,
  user: {
    username: "tri",
    email: "",
  },
  authenticate:false,
  authenticating: false,

};
export default (state = initialState, action) =>{
  
  switch (action.type) {

    case actionTypes.LOGIN_REQUEST:
      return { ...state, authenticating: true}
    case actionTypes.LOGIN_SUCCESS:
      const { token, user } = action.payloads
      return {
         ...state, 
         token: token, 
         user: user, 
         authenticate: true,
         authenticating: false
        }
    default:
      return {...state};
  }
}