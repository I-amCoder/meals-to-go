import React, { useContext } from "react";
import { MD2Colors, Searchbar } from "react-native-paper";
import Spacer from "../../../components/Spacer";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantContext";

import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { SafeArea } from "../components/SafeArea";

import {
  ListContainer,
  Loading,
  LoadingContainer,
  RestaurantList,
  SearchContainer,
} from "./RestaurantScreen.style";

const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  const restaurants = restaurantContext.restaurants;

  return (
    <SafeArea>
      {restaurantContext.isLoading && (
        <LoadingContainer>
          <Loading size={50} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
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
      </ListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
