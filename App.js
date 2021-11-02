import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SafeArea } from "./src/components/utility/safe-area.components";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text> Settings </Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text> Map </Text>
  </SafeArea>
);
const Account = () => (
  <SafeArea>
    <Text> Account </Text>
  </SafeArea>
);
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Restaurants") {
                  iconName = focused
                    ? "ios-restaurant"
                    : "ios-restaurant-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "ios-settings" : "ios-settings-outline";
                } else if (route.name === "Account") {
                  iconName = focused
                    ? "person-circle"
                    : "person-circle-outline";
                } else if (route.name === "Map") {
                  iconName = focused ? "md-location" : "md-location-outline";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "#228B22",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Account" component={Account} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
