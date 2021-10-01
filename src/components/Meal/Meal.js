import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Meal.css";

const Meal = (props) => {
  const {
    strMealThumb,
    strMeal,
    strCategory,
    strInstructions,
    strIngredient1,
    idMeal,
  } = props.meal;

  const history = useHistory();

  const handleMealClick = () => {
    history.push(`/meals/meal/${idMeal}`);
  };
  return (
    <Col>
      <Card className="meal">
        <Card.Img variant="top" src={strMealThumb} className="meal-img" fluid />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strCategory}</Card.Text>
          <Card.Text>{strIngredient1}</Card.Text>
          <Card.Text>{strInstructions.slice(0, 250)}</Card.Text>
        </Card.Body>
        <Button variant="warning" onClick={handleMealClick}>
          View details
        </Button>
      </Card>
    </Col>
  );
};

export default Meal;
