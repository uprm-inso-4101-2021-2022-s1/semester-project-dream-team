import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some rest.",
    icon,
    photos = [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "Plaza de estrellas",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text> {name} </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
