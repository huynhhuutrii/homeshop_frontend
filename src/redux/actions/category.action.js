import axios from "../../helpers"
import * as actionTypes from "../constants";
export const getCategory = () => {
  return async (dispatch) => {
    dispatch({type:actionTypes.GET_ALL_CATEGORY_RQ})
    try {
      const res = await axios.get("/category/getcategory");
      const { listCategory } = res.data;
      dispatch({
        type: actionTypes.GET_ALL_CATEGORY_SUCCESS,
        payloads:
          listCategory
      })
    } catch (err) {
      dispatch({
        type: actionTypes.GET_ALL_CATEGORY_FAILURE,
        payloads: { error: JSON.stringify(err) }
      })
    }
  }
}
export const addCategory = (form) =>{
  return async dispatch => {
    dispatch({ type: actionTypes.ADD_CATEGORY_REQUEST })
    const res = await axios.post("./category/create",form);
    if(res.status === 201){
      dispatch({
        type: actionTypes.ADD_CATEGORY_SUCCESS,
        payloads: res.data.category
      })
    }else{
      dispatch({ 
        type:actionTypes.ADD_CATEGORY_FAILURE, 
        payloads:{
          error: res.data.error
        }

      })
    }
  }
}