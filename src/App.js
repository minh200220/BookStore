import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MyCart from "./pages/MyCart";
import NotFound from "./pages/404";
import Home from "./pages/Home";

import { CartProvider } from "./contexts/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/cart">
              <MyCart />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
