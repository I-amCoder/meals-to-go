import React from "react";
import RestaurantScreen from "./src/features/restaurants/screens/RestaurantScreen";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
