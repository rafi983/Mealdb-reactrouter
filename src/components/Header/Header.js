import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Header.css";

const Header = () => {
  const history = useHistory();

  const handleToSeeMeals = () => {
    history.push("/meals");
  };
  return (
    <div className="header-container">
      <div className="header-content">
        <h1 className="header-title">Welcome to Bbq Kitchen.</h1>
        <Button variant="warning" onClick={handleToSeeMeals}>
          View All Meals
        </Button>
      </div>
    </div>
  );
};

export default Header;
