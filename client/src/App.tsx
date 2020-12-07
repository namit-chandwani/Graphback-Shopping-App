import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Products from "./components/Product/Products";
import AddProduct from "./components/Product/AddProduct";
import Orders from "./components/Order/Orders";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <h1>Welcome to App.tsx</h1>
      <Switch>
        <Redirect exact from="/" to="/products" />
        <Route path="/products" component={Products} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/orders" component={Orders} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
