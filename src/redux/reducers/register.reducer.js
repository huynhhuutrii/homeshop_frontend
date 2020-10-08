import * as actionTypes from "../constants";
const initialState = {
  message: "",
  error: null,
  areRegitering: false,
  authenticate:false,
};
export default (state = initialState, action) => {
  switch (action.type) {
   
    default:
      return { ...state };
  }
}