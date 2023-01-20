import React from "react";
import { View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfoCard from "../components/RestaurantInfoCard";

// Styled Components
const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const ListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
// End STyled COmponents
const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
