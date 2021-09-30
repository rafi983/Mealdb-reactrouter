import React, { useEffect, useState } from "react";
import { Button, FormControl, InputGroup, Row } from "react-bootstrap";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };

  return (
    <div>
      <h1>All meals</h1>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search meals"
          aria-label="Search meals"
          aria-describedby="basic-addon2"
          onChange={handleSearch}
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>

      <Row xs={1} md={3} className="g-4 meals-container">
        {meals?.map((meal) => (
          <Meal meal={meal} key={meal.name}></Meal>
        ))}
      </Row>
    </div>
  );
};

export default Meals;
