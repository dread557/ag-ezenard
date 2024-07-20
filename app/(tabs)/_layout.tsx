import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { HomeIcon } from "@/assets/icons/HomeIcon";
import { AllProductIcon } from "@/assets/icons/AllProductsIcon";
import CartIcon from "@/assets/icons/CartIcon";
import OrdersIcon from "@/assets/icons/OrdersIcon";
import ProfileIcon from "@/assets/icons/ProfileIcon";
import LogoIcon from "@/assets/icons/LogoIcon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 10,
          height: 54,
          // backgroundColor: Colors[colorScheme ?? "light"].tabBar,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon focused={focused} fill={focused ? color : "none"} />
          ),
        }}
      />
      <Tabs.Screen
        name="allProducts"
        options={{
          title: "All Products",
          tabBarIcon: ({ color, focused }) => (
            <AllProductIcon focused={focused} fill={focused ? color : "none"} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <CartIcon focused={focused} fill={focused ? color : "none"} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color, focused }) => (
            <ProfileIcon focused={focused} fill={focused ? color : "none"} />
          ),
        }}
      />
      <Tabs.Screen
        name="(ordersTabs)"
        options={{
          title: "My Orders",
          tabBarIcon: ({ color, focused }) => (
            <OrdersIcon focused={focused} fill={focused ? color : "none"} />
          ),
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => <LogoIcon />,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
        }}
      />
    </Tabs>
  );
}
