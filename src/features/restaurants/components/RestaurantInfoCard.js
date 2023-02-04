import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/Spacer";
import {
  Icon,
  Info,
  LeftSection,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
} from "./RestaurantInfoCard.style";
import { Text } from "../../../components/typography/Text";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  // Basic Info

  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratings = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover borderRadius={34} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratings.map((i, index) => {
              return <SvgXml key={index} xml={star} width={20} height={20} />;
            })}
          </Rating>
          <LeftSection>
            {isClosedTemporarily && (
              <Text variant="error">Closed Temporarily</Text>
            )}
            <Spacer position="left" size="medium" />
            {isOpenNow && <SvgXml xml={open} width={15} height={15} />}
            <Spacer position="left" size="medium">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </LeftSection>
        </Section>
        <Text variant="body">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
