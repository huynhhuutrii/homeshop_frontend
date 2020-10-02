import { combineReducers,} from "redux";
import userReducer from "./user.reducer"

 const appReducer = combineReducers({ userReducer })
 export default appReducer;
