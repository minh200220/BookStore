import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
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
          </Switch>
      </div>
    </Router>
  );
}

export default App;
