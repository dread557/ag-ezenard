import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "../ThemedText";

const sizeArr = [32, 35, 38, 39, 40, 42, 45];

const Sizes = () => {
  const [selected, setSelected] = useState<null | number>(null);
  const handleSizeClick = (size: number) => {
    if (selected === size) {
      setSelected(null);
    } else {
      setSelected(size);
    }
  };
  return (
    <View style={styles.container}>
      <ThemedText style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>
        Size
      </ThemedText>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {sizeArr.map((size, index) => (
          <Pressable
            key={index}
            style={[
              styles.sizeBtn,
              { backgroundColor: size === selected ? "#0072C6" : "#F9F9F9" },
            ]}
            onPress={() => handleSizeClick(size)}
          >
            <ThemedText
              style={{
                color: size === selected ? "#ffffff" : "#555555",
              }}
            >
              {size}
            </ThemedText>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Sizes;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  sizeBtn: {
    height: 26,
    width: 40.86,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
