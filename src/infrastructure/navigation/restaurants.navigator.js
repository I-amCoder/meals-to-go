import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurants/screens/RestaurantScreen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen name="restaurants" component={RestaurantScreen} />
    </RestaurantStack.Navigator>
  );
};
