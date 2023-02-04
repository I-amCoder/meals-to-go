import React, {
  useState,
  useMemo,
  useEffect,
  createContext,
  useContext,
} from "react";
import { LocationContext } from "../location/locationContext";

import { restaurantsRequest, restaurantsTransform } from "./RestaurantService";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { location } = useContext(LocationContext);

  const retriveRestaurants = (loc) => {
    setRestaurants([]);
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 1000);
  };
  useEffect(() => {
    if (location) {
      const { lat, lng } = location;
      const myLocation = `${lat},${lng}`;
      retriveRestaurants(myLocation);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
