import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/Shop/ShopPage";
import SignUpSignIn from "./pages/SignupSignin/SignUpSignIn";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/signin">
          <SignUpSignIn />
        </Route>
      </Switch>
    </>
  );
}

export default App;
