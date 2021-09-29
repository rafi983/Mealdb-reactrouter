import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import About from "../About/About";
import Header from "../Header/Header";
import MealDetail from "../MealDetail/MealDetail";
import Meals from "../Meals/Meals";
import Notfound from "../Notfound/Notfound";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar variant="dark" className="mealdb-nav">
        <Container>
          <Navbar.Brand href="#home" className="nav-brand">
            TheMealDb
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Router>
        <NavLink
          to="/header"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/meals"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Meals
        </NavLink>

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
