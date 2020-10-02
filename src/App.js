import React from "react";
import HomePage from "./pages/homepage";
import ProductDetailPage from "./pages/product-detail-page";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/HOC/PrivateRoute";
function App() {
  return (
    <div>
      <Switch>
        <PrivateRoute
          path="/"
          exact
          component = {HomePage}
          // render={(routeProps) => <HomePage {...routeProps} />}
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
    </div>
  );
}
export default App;
