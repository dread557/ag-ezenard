import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import { useCart } from "@/contexts/CartContext";

const PriceSummary = () => {
  const { getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();
  return (
    <View style={styles.container}>
      <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
        Price summary
      </ThemedText>
      <View style={styles.box}>
        <View style={styles.row}>
          <ThemedText style={styles.key}>Total price</ThemedText>
          <ThemedText style={styles.value}>
            ₦ {totalPrice.toLocaleString()}
          </ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedText style={styles.key}>Delivery Fee</ThemedText>
          <ThemedText style={styles.value}>₦ 1,550.00</ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedText style={styles.key}>Discount</ThemedText>
          <ThemedText style={styles.value}>₦ 0.00</ThemedText>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
            borderTopWidth: 1,
            borderTopColor: "#EAEAEA",
            paddingTop: 15,
          }}
        >
          <ThemedText style={styles.key}>Total</ThemedText>
          <ThemedText style={styles.value}>
            ₦ {(totalPrice + 1550).toLocaleString()}
          </ThemedText>
        </View>
      </View>
    </View>
  );
};

export default PriceSummary;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  box: {
    backgroundColor: "#F9F9F9",
    padding: 16,
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
  },
  key: { fontSize: 15, color: "#555555" },
  value: { fontSize: 15, fontWeight: 500, color: "#2A2A2A" },
});
