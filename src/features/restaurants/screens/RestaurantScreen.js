import React from "react";
import { Searchbar } from "react-native-paper";
import Spacer from "../../../components/Spacer";
import { restaurantsRequest } from "../../../services/restaurants/RestaurantService";

import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { SafeArea } from "../components/SafeArea";

import {
  ListContainer,
  RestaurantList,
  SearchContainer,
} from "./RestaurantScreen.style";
const DATA = [
  { name: "helo" },
  { name: "helo1" },
  { name: "helo2" },
  { name: "helo3" },
  { name: "helo4" },
  { name: "helo56" },
  { name: "helo6" },
  { name: "helo7" },
  { name: "helo8" },
  { name: "helo7" },
];

const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        <RestaurantList
          data={DATA}
          renderItem={() => (
            <Spacer position={"bottom"} size="large">
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item, index) => index}
        />
      </ListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
