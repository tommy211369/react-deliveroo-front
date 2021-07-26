import React, { useState, useEffect } from "react";
import logo from "./img/logo-deliveroo.png";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3200/");
      setData(response.data);
      console.log(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement ...</span>
  ) : (
    <div>
      <div className="header">
        <div className="wrapper">
          <img src={logo} alt="logo deliveroo" />
        </div>
      </div>
      <div className="sous-header">
        <div>
          <h2>{data.restaurant.name}</h2>
          <p>{data.restaurant.description}</p>
        </div>
        <img src={data.restaurant.picture} alt={data.restaurant.name} />
      </div>
      <div className="wrapper">
        <div className="categories">
          {data.categories
            .splice(data.categories.length - 6)
            .map((category, index) => {
              return (
                <div key={index} className="category">
                  <h3>{category.name}</h3>
                  <div className="meals">
                    {category.meals.map((meal) => {
                      return (
                        <div key={meal.id} className="meal">
                          <div className="details">
                            <h4>{meal.title}</h4>
                            {meal.description ? (
                              <p className="meal-description">
                                {meal.description}
                              </p>
                            ) : (
                              <p></p>
                            )}
                            <div className="price">
                              <p>{meal.price.replace(".", ",")} €</p>
                              {meal.popular ? (
                                <span>Populaire</span>
                              ) : (
                                <div></div>
                              )}
                            </div>
                          </div>

                          {meal.picture ? (
                            <img src={meal.picture} alt={meal.title} />
                          ) : (
                            <p></p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
