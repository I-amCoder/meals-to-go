import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../components/SafeArea";
import { RestaurantNavigator } from "./restaurants.navigator";

const Map = () => {
  return (
    <>
      <SafeArea>
        <Text>Helo Map</Text>
      </SafeArea>
    </>
  );
};
const Settings = () => {
  return (
    <>
      <SafeArea>
        <Text>Afzaal is here</Text>
      </SafeArea>
    </>
  );
};
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
