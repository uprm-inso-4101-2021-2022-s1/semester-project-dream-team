import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { Text } from "react-native";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="attractions"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="AttractionDetail"
        component={() => <Text> Attraction Details</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
