import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./MainScreen";
import NotificationScreen from "./NotificationScreen";
import {
  HomeIcon,
  BellAlertIcon,
  UserCircleIcon,
  BuildingStorefrontIcon,
} from "react-native-heroicons/outline";
import OrderScreen from "./OrderScreen";
import AccountScreen from "./AccountScreen";

export default function HomeScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let colorName = focused ? "#4797EF" : "#85949F";
          let opacity = 0.9;
          let iconSize = 25;

          if (route.name === "MainScreen") {
            return (
              <HomeIcon color={colorName} size={iconSize} opacity={opacity} />
            );
          } else if (route.name === "NotificationScreen") {
            return (
              <BellAlertIcon
                color={colorName}
                size={iconSize}
                opacity={opacity}
              />
            );
          }
          else if (route.name === "OrderScreen") {
            return (
              <BuildingStorefrontIcon
                color={colorName}
                size={iconSize}
                opacity={opacity}
              />
            );
          }
          else if (route.name === "AccountScreen") {
            return (
              <UserCircleIcon
                color={colorName}
                size={iconSize}
                opacity={opacity}
              />
            );
          }
        },
        tabBarActiveTintColor: "#4797EF",
        tabBarInactiveTintColor: "#85949F",
        headerShown: false,
      })}
    >
      <Tab.Screen name="MainScreen" component={MainScreen} options={{title: 'Home'}}  />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} options={{title: 'Notification'}} />
      <Tab.Screen name="OrderScreen" component={OrderScreen} options={{title: 'Order'}} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} options={{title: 'Account'}} />
    </Tab.Navigator>
  );
}
