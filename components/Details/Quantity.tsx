import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "../ThemedText";

const Quantity = ({ title = true }: { title?: boolean }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <View style={styles.container}>
      {title && (
        <ThemedText style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>
          Quantity
        </ThemedText>
      )}
      <View style={styles.quantityContainer}>
        <Pressable style={styles.button} onPress={decrementQuantity}>
          <ThemedText style={styles.buttonText}>-</ThemedText>
        </Pressable>
        <ThemedText style={styles.input}>{quantity}</ThemedText>
        <Pressable style={styles.button} onPress={incrementQuantity}>
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
  },
});
