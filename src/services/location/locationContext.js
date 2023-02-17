import React, { createContext, useEffect, useState } from "react";

import { locationRequest, locationTransform } from "./locationService";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("Antwerp");
  const [location, setLocation] = useState(null);

  const onSearch = (searchKeyWord) => {
    setIsLoading(true);
    setKeyword(searchKeyWord);
  };
  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return;
    }
    locationRequest(keyword.toLowerCase().trim())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        location,
        error,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
