import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Hats from "./pages/Hats/Hats";
import Jackets from "./pages/Jackets/Jackets";
import Mens from "./pages/Mens/Mens";
import Sneakers from "./pages/Sneakers/Sneakers";
import Womens from "./pages/Womens/Womens";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop/hats">
          <Hats />
        </Route>
        <Route path="/shop/jackets">
          <Jackets />
        </Route>
        <Route path="/shop/mens">
          <Mens />
        </Route>
        <Route path="/shop/sneakers">
          <Sneakers />
        </Route>
        <Route path="/shop/womens">
          <Womens />
        </Route>
      </Switch>
    </>
  );
}

export default App;
