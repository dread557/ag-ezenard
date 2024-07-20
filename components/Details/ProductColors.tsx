import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";

const colors = [
  { color: "Red", code: "#FF0000" },
  { color: "Purple", code: "#9747FF" },
  { color: "Blue", code: "#0000FF" },
  { color: "Black", code: "#141B34" },
  { color: "Yellow", code: "#FFCD00" },
  { color: "Green", code: "#09C53B" },
];

const ProductColors = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorPress = (color: { color: string; code: string }) => {
    setSelectedColor(selectedColor === color.code ? null : color.code);
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
              { backgroundColor: color.code },
              selectedColor === color.code && styles.selectedBox,
            ]}
            onPress={() => handleColorPress(color)}
          >
            {selectedColor === color.code && (
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
