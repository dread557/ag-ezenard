import { StyleSheet, Text, View } from "react-native";
import React from "react";
import EmptyOrderIcon from "@/assets/icons/EmptyOrderIcon";
import { ThemedText } from "@/components/ThemedText";

const complete = () => {
  return (
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
        No completed order yet
      </ThemedText>
    </View>
  );
};

export default complete;

const styles = StyleSheet.create({});
