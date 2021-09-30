import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../About/About";
import Header from "../Header/Header";
import MealDetail from "../MealDetail/MealDetail";
import Meals from "../Meals/Meals";
import Notfound from "../Notfound/Notfound";
import "./Navigation.css";
import NavMenu from "./NavMenu";

const Navigation = () => {
  return (
    <div>
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>

          <Route path="/header">
            <Header />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/meals">
            <Meals />
          </Route>

          <Route path="/meal/:mealId">
            <MealDetail />
          </Route>

          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Navigation;
