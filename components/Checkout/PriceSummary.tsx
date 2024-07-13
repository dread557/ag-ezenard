import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";

const PriceSummary = () => {
  return (
    <View style={styles.container}>
      <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
        Price summary
      </ThemedText>
      <View style={styles.box}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 7,
          }}
        >
          <ThemedText style={{ fontSize: 15, color: "#555555" }}>
            Total price
          </ThemedText>
          <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
            ₦ 185,000.00
          </ThemedText>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 7,
          }}
        >
          <ThemedText style={{ fontSize: 15, color: "#555555" }}>
            Delivery Fee
          </ThemedText>
          <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
            ₦ 1,550.00
          </ThemedText>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 7,
          }}
        >
          <ThemedText style={{ fontSize: 15, color: "#555555" }}>
            Discount
          </ThemedText>
          <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
            ₦ 0.00
          </ThemedText>
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
          <ThemedText style={{ fontSize: 15, color: "#555555" }}>
            Total
          </ThemedText>
          <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
            ₦ 186,550.00
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
});
