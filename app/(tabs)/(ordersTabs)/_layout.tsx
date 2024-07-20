import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const Layout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: "#2A2A2A",
        tabBarInactiveTintColor: "#555555",
        tabBarLabelStyle: {
          fontWeight: "bold",
          textTransform: "capitalize",
          fontSize: 15,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#2A2A2A",
          height: 1,
          paddingTop: 5,
          marginHorizontal: 20,
        },
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <MaterialTopTabs.Screen
        name="index"
        options={{ title: "Active Orders" }}
      />
      <MaterialTopTabs.Screen
        name="complete"
        options={{ title: "Completed Orders" }}
      />
    </MaterialTopTabs>
  );
};

export default Layout;
