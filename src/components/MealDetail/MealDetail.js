import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import "./MealDetail.css";

const MealDetail = () => {
  const { mealId } = useParams();

  const [mealDetail, setMealDetail] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res.json())
      .then((data) => setMealDetail(data.meals[0]));
  }, []);

  const {
    strMealThumb,
    strMeal,
    strCategory,
    strInstructions,
    strIngredient1,
  } = mealDetail;

  const history = useHistory();

  const handleMeal = () => {
    history.push(`/meals`);
  };

  return (
    <Col>
      <Card className="meal" style={{ width: "25rem", margin: "5rem auto" }}>
        <Card.Img variant="top" src={strMealThumb} className="meal-img" />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strCategory}</Card.Text>
          <Card.Text>{strIngredient1}</Card.Text>
          <Card.Text>{strInstructions}</Card.Text>
        </Card.Body>
        <Button variant="warning" onClick={handleMeal}>
          See all meals
        </Button>
      </Card>
    </Col>
  );
};

export default MealDetail;
