import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/Shop/ShopPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </>
  );
}

export default App;
