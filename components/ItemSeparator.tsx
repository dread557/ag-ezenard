import React from "react";
import { View, StyleSheet } from "react-native";

const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
});

export default ItemSeparator;