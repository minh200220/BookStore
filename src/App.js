import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";

// users' pages
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MyCart from "./pages/MyCart";
import NotFound from "./pages/404";
import CheckOut from "./pages/CheckOut";
import View from "./pages/View";
import Home from "./pages/Home";

// adminitrator's page
import ViewAll from "./pages/ViewAll";
import Create from "./pages/Create";
import Update from "./pages/Update";

import { CartProvider } from "./contexts/Cart";
import { BookProvider } from "./contexts/Book";

function App() {
  return (
    <CartProvider>
      <BookProvider>
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
              <Route path="/checkout">
                <CheckOut />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/view">
                <View />
              </Route>
              <Route path="/viewall">
                <ViewAll />
              </Route>
              <Route path="/update">
                <Update />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </BookProvider>
    </CartProvider>
  );
}

export default App;
