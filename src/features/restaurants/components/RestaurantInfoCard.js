import { View, Text, StyleSheet } from "react-native";

import React from "react";
import { Card } from "react-native-paper";

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
  return (
    <View>
      <Card elevation={5} style={styles.card}>
        <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
        <Card.Title title={name} />
        <Card.Content>
          <Text>{address}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {},
});
