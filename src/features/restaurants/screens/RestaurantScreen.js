import React from "react";
import { View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfoCard from "../components/RestaurantInfoCard";

// Styled Components
const Container = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
const Search = styled(View)`
  padding: 10px;
`;
const List = styled(View)`
  flex: 1;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.ui.error};
`;
// End STyled COmponents
const RestaurantScreen = () => {
  return (
    <Container>
      <Search>
        <Searchbar />
      </Search>
      <List>
        <RestaurantInfoCard />
      </List>
    </Container>
  );
};

export default RestaurantScreen;
