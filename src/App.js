import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Error from "./components/Error";

import"./App.css"
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />

        <Route  component={Error} />
        <Redirect to="/" />
      </Switch>
      
    </>
  );
};

export default App;
