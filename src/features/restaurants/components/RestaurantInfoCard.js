import { View, Text, StyleSheet } from "react-native";

import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  // Styled Components
  const RestaurantCard = styled(Card)`
    background-color: white;
  `;
  const CardTitle = styled(Card.Title)``;
  const CardContent = styled(Card.Content)``;
  const RestaurantName = styled(Text)``;
  const RestaurantCover = styled(Card.Cover)``;
  // End Styled Components

  return (
    <RestaurantCard>
      <RestaurantCover source={{ uri: photos[0] }} />
      <CardTitle title="helo" />
      <CardContent>
        <RestaurantName>{name}</RestaurantName>
      </CardContent>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
