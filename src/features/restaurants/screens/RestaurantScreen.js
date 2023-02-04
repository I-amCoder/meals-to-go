import React, { useContext } from "react";
import { MD2Colors } from "react-native-paper";
import Spacer from "../../../components/Spacer";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantContext";

import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { SafeArea } from "../../../components/SafeArea";

import {
  ListContainer,
  Loading,
  LoadingContainer,
  RestaurantList,
} from "./RestaurantScreen.style";
import Search from "../components/SearchComponent";

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
      <Search />
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
