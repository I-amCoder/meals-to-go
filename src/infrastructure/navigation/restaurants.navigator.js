import React, { Text } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurants/screens/RestaurantScreen";
import RestaurantDetail from "../../features/restaurants/screens/RestaurantDetail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalTransition,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantScreen"
        component={RestaurantScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
