import { combineReducers,} from "redux";
import authReducer from "./auth.reducer";
import productReducer from "./product.reducer";
import categoryReducer from "./category.reducer";
import orderReducer from "./order.reducer"
const appReducer = combineReducers({ 
   authReducer, 
   productReducer, 
   categoryReducer,
   orderReducer
  })
 export default appReducer;
