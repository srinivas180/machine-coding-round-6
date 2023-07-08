import { createContext, useState } from "react";

import { restaurantsData } from "../db/data";

export const RestaurantsContext = createContext();

export function RestaurantsProvider({ children }) {
    const [restaurants, setRestaurants] = useState(restaurantsData);

    const getRestaurantById = (restaurantId) => {
        return restaurants.find((restaurant) => {
            return restaurant.id === restaurantId;
        });
    };

    const addRating = (user, restaurant) => {
        setRestaurants((restaurants) => {
            return restaurants.map((currentRestaurant) =>
                restaurant.id === currentRestaurant.id
                    ? {
                          ...currentRestaurant,
                          ratings: [...restaurant.ratings, user],
                      }
                    : currentRestaurant
            );
        });
    };

    const getAverageRating = (restaurant) => {
        let sum = restaurant.ratings.reduce((accumulator, currentReview) => {
            return accumulator + Number(currentReview.rating);
        }, 0);
        let avgRating = sum / restaurant.ratings.length;
        return avgRating;
    };

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                getRestaurantById,
                addRating,
                getAverageRating,
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
}
