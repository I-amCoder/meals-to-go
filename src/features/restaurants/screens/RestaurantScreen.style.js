import { FlatList } from "react-native";
import { View } from "react-native";
import styled from "styled-components";

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
