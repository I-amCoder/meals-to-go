import React from "react";
import RestaurantScreen from "./src/features/restaurants/screens/RestaurantScreen";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as UseLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "./src/features/restaurants/components/SafeArea";
import { RestaurantsContextProvider } from "./src/services/restaurants/RestaurantContext";

const Tab = createBottomTabNavigator();
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
        <Text>Helo Settings</Text>
      </SafeArea>
    </>
  );
};

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

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
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>

          <StatusBar style="auto" />
        </RestaurantsContextProvider>
      </ThemeProvider>
    </>
  );
}
