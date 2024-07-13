import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";

const colors = [
  "#FF0000",
  "#9747FF",
  "#0000FF",
  "#141B34",
  "#FF00FF",
  "#00FFFF",
];

const ProductColors = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorPress = (color: string) => {
    setSelectedColor(selectedColor === color ? null : color);
  };

  return (
    <View style={styles.container}>
      <ThemedText style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>
        Colours
      </ThemedText>
      <View style={styles.colorsContainer}>
        {colors.map((color, index) => (
          <Pressable
            key={index}
            style={[
              styles.colorBox,
              { backgroundColor: color },
              selectedColor === color && styles.selectedBox,
            ]}
            onPress={() => handleColorPress(color)}
          >
            {selectedColor === color && (
              <FontAwesome name="check" size={9} color="white" />
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default ProductColors;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  colorsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  colorBox: {
    width: 25,
    height: 24,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  selectedBox: {
    borderWidth: 2,
    borderColor: "white",
  },
});
