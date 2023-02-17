import React, { useState } from "react";
import { SafeArea } from "../../../components/SafeArea";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(true);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [drinkExpanded, setDrinkExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Chineese" />
            <List.Item title="Salad" />
          </List.Accordion>
        </List.Section>
        <List.Section>
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Samosy" />
            <List.Item title="Rice" />
          </List.Accordion>
        </List.Section>
        <List.Section>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Paratha" />
            <List.Item title="Pizza" />
          </List.Accordion>
        </List.Section>
        <List.Section>
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="food-fork-drink" />}
            expanded={drinkExpanded}
            onPress={() => setDrinkExpanded(!drinkExpanded)}
          >
            <List.Item title="Coca Cola" />
            <List.Item title="Sting" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantDetail;
