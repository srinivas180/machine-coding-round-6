import { useContext, useState } from "react";

import { Restaurant } from "../../components/Restaurant";
import { RestaurantsContext } from "../../contexts/RestaurantsContext";
import { CuisinesContext } from "../../contexts/CuisinesContext";

import "./index.css";

export function Home() {
    const { restaurants } = useContext(RestaurantsContext);
    const { cuisines, selectedCuisineId, setSelectedCuisineId } =
        useContext(CuisinesContext);

    return (
        <div className="container">
            <h1>Food Ordering App</h1>
            <div>
                <div>Select your cuisine:</div>
                <div className="cuisine__buttons">
                    {cuisines.map((cuisine) => (
                        <button
                            key={cuisine.id}
                            className="cuisine__button button button--primary"
                            onClick={() => setSelectedCuisineId(cuisine.id)}
                        >
                            {cuisine.name}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                {selectedCuisineId !== undefined
                    ? restaurants
                          .filter(
                              (restaurant) =>
                                  restaurant.cuisine_id === selectedCuisineId
                          )
                          .map((restaurant) => (
                              <Restaurant restaurant={restaurant} />
                          ))
                    : ""}
            </div>
        </div>
    );
}
