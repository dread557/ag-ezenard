import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "../ThemedText";

interface Props {
  title?: boolean;
  quantity: number;
  increment: () => void;
  decrement: () => void;
}

const Quantity = ({ title = true, quantity, increment, decrement }: Props) => {
  return (
    <View style={styles.container}>
      {title && (
        <ThemedText style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>
          Quantity
        </ThemedText>
      )}
      <View style={styles.quantityContainer}>
        <Pressable style={styles.button} onPress={decrement}>
          <ThemedText style={styles.buttonText}>-</ThemedText>
        </Pressable>
        <ThemedText style={styles.input}>{quantity}</ThemedText>
        <Pressable style={styles.button} onPress={increment}>
          <ThemedText style={styles.buttonText}>+</ThemedText>
        </Pressable>
      </View>
    </View>
  );
};

export default Quantity;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F9F9F9",
    borderRadius: 4,
    width: 121,
    height: 34,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2A2A2A",
  },
  input: {
    width: 25,
    height: 26,
    textAlign: "center",
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 5,
    backgroundColor: "#0072C61F",
    alignItems: "center",
    color: "#2A2A2A",
  },
});
