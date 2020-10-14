import * as actionTypes from "../constants";
import axios from "../../helpers";

export const addProduct = (form) => {
  return async (dispatch) => {
    const res = await axios.post("/product/createproduct", form);
  }
}
