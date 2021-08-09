import React, { useEffect } from "react";

import "./App.css";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";

import Header from "../../components/Header";
import Home from "../../components/Home";
import Checkout from "../../components/Checkout";
import Login from "../../components/Login";
import Payment from "../../components/Payment";
import Orders from "../../components/Orders";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JLrajSHrZYmVUxutd6OARvJTyDOzwUr3kIHKCLAgYkWqVALGWxTdz9SIeP10sHZOCeHrXSa8EqrwJDHWK91bGwP00RgMo5zlW"
);

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />

            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
