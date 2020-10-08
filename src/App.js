import React, { useEffect } from "react";
import HomePage from "./pages/homepage";
import ProductDetailPage from "./pages/product-detail-page";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import AdminPage from "./pages/adminpage";
import ProductsPage from "./pages/productspage";
import CategoryPage from "./pages/categorypage";
import OrderPage from "./pages/orderpage";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "./redux/actions/user.action";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.authReducer);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(userLoggedIn())
    }
  },[])


  return <Switch>
    <PrivateRoute
      path="/"
      exact
      component={AdminPage}
    />
    <PrivateRoute
      path="/products"
      component={ProductsPage}
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
      path="/product-detail"
      render={(routeProps) => <ProductDetailPage {...routeProps} />}
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