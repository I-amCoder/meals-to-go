import { FlatList, StatusBar } from "react-native";
import { View } from "react-native";
import styled from "styled-components";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  // ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
export const ListContainer = styled(View)`
  flex: 1;
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
