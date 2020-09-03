import React from "react";
import { Route, BrowserRouter, HashRouter } from "react-router-dom";
import history from "./services/history";

import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";

import { Provider } from "react-redux";
import { store } from "./store";

const Routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route component={HomePage} path="/" exact />
        <Route component={Login} path="/login" />
        <Route component={Product} path="/product" />
        <Route component={Cart} path="/cart" />
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;
