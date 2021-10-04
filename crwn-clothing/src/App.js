import React from "react";
import { Route, Switch } from "react-router-dom";

import { auth } from "./firebase/firebase.utilis";

import Header from "./components/header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/Shop/ShopPage";
import SignUpSignIn from "./pages/SignupSignin/SignUpSignIn";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubScribeFromAuth;

  componentDidMount() {
    this.unsubScribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubScribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
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
}

export default App;
