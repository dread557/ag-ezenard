import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";
import CheckoutItem from "./CheckoutItem";
import ItemSeparator from "../ItemSeparator";
import { useCart } from "@/contexts/CartContext";

const OrderList = () => {
  const { state } = useCart();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
          Order list
        </ThemedText>
        <Link
          href={{ pathname: "/(tabs)/cart" }}
          style={{ color: "#0072C6", fontSize: 15, fontWeight: 600 }}
        >
          Edit
        </Link>
      </View>
      <FlatList
        data={state.cart}
        renderItem={({ item }) => <CheckoutItem item={item} />}
        keyExtractor={(item) => item.unique_id}
        ItemSeparatorComponent={() => <ItemSeparator />}
        contentContainerStyle={{ paddingBottom: 180 }}
      />
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },
});
