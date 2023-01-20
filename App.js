import React from "react";
import RestaurantScreen from "./src/features/restaurants/screens/RestaurantScreen";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as UseLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = UseLato({
    Lato_400Regular,
  });
  if (!latoLoaded || !oswaldLoaded) {
    console.log("loading fonts");
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
