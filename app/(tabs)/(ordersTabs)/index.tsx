import { FlatList, StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import EmptyOrderIcon from "@/assets/icons/EmptyOrderIcon";
import { ThemedText } from "@/components/ThemedText";
import { useOrder } from "@/contexts/OrderContext";
import OrderItem from "@/components/Order/OrderItem";
import ItemSeparator from "@/components/ItemSeparator";

const active = () => {
  const colorScheme = useColorScheme();
  const { orders } = useOrder();
  return (
    <View
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].background,
        flex: 1,
        padding: 20,
      }}
    >
      {orders.length > 0 ? (
        <FlatList
          data={orders}
          renderItem={({ item }) => <OrderItem item={item} />}
          keyExtractor={(item) => item.reference}
          ItemSeparatorComponent={() => <ItemSeparator />}
          contentContainerStyle={{ paddingBottom: 180 }}
        />
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <EmptyOrderIcon />
          <ThemedText
            style={{
              color: "#2A2A2A",
              fontSize: 15,
              fontWeight: "500",
              marginTop: 20,
            }}
          >
            No active orders
          </ThemedText>
        </View>
      )}
    </View>
  );
};

export default active;

const styles = StyleSheet.create({});
