import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as UseLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/services/restaurants/RestaurantContext";
import { LocationContextProvider } from "./src/services/location/locationContext";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = UseLato({
    Lato_400Regular,
  });
  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
            <StatusBar style="auto" />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}
