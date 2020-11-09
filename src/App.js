import React, { useEffect } from "react";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import AdminPage from "./pages/adminpage";
import ProductPage from "./pages/productpage";
import CategoryPage from "./pages/categorypage";
import OrderPage from "./pages/orderpage";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "./redux/actions/user.action";
import { getInitialData } from "./redux/actions/initialData.action";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.authReducer);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(userLoggedIn())
    }
    dispatch(getInitialData())
  }, [])


  return <Switch>
    <PrivateRoute
      path="/"
      exact
      component={AdminPage}
    />
    <PrivateRoute
      path="/products"
      component={ProductPage}
    />

    <PrivateRoute
      path="/orders"
      component={OrderPage}
    />
    <PrivateRoute
      path="/category"
      component={CategoryPage}
    />
    <Route
      path="/register"
      render={(routeProps) => <RegisterPage {...routeProps} />}
    />
    <Route
      path="/login"
      exact
      render={(routeProps) => <LoginPage {...routeProps} />}
    />
  </Switch>
}
export default App;
