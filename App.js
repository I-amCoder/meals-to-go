import React from "react";
import RestaurantScreen from "./src/features/restaurants/screens/RestaurantScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <StatusBar style="auto" />
    </>
  );
}
