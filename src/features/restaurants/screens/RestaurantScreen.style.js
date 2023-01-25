import { FlatList } from "react-native";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
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
export const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
