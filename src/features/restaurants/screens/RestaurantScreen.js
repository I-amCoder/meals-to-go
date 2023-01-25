import React, { useContext } from "react";
import { ActivityIndicator, MD2Colors, Searchbar } from "react-native-paper";
import Spacer from "../../../components/Spacer";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantContext";
import { restaurantsRequest } from "../../../services/restaurants/RestaurantService";

import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { SafeArea } from "../components/SafeArea";

import {
  ListContainer,
  RestaurantList,
  SearchContainer,
} from "./RestaurantScreen.style";

const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  const restaurants = restaurantContext.restaurants;

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        {restaurantContext.isLoading ? (
          <ActivityIndicator
            animating={true}
            color={MD2Colors.purple100}
            size="large"
            style={{ flex: 1, alignSelf: "center" }}
          />
        ) : (
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <Spacer position={"bottom"} size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        )}
      </ListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
