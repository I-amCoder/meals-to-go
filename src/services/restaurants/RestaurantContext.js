import React, { useState, useMemo, useEffect, createContext } from "react";

import { restaurantsRequest, restaurantsTransform } from "./RestaurantService";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const retriveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    retriveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
