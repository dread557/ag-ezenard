import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import Quantity from "../Details/Quantity";
import CancelIcon from "@/assets/icons/CancelIcon";

const CartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image
          style={styles.img}
          source={{ uri: "https://github.com/dread557.png" }}
        />
      </View>
      <View style={{ gap: 8, justifyContent: "center", position: "relative" }}>
        <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
          Ego Raid
        </ThemedText>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[{ backgroundColor: "#000000" }, styles.colorBlock]} />
            <ThemedText
              lightColor="#555555"
              style={{ fontSize: 12, marginLeft: 8 }}
            >
              Black
            </ThemedText>
          </View>
          <View style={styles.divider} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ThemedText>Size</ThemedText>
            <View
              style={{
                width: 25,
                height: 26,
                backgroundColor: "#F9F9F9",
                alignItems: "center",
                marginLeft: 6,
              }}
            >
              <ThemedText lightColor="#555555" style={{ fontSize: 15 }}>
                39
              </ThemedText>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Quantity title={false} />
          <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
            ₦ 37,000.00
          </ThemedText>
        </View>
        <Pressable style={{ position: "absolute", top: -5, right: 0 }}>
          <CancelIcon />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 152,
    borderWidth: 1,
    borderColor: "#F9F9F9",
    borderRadius: 8,
    padding: 16,
    gap: 20,
  },
  imgWrapper: {
    backgroundColor: "#EAEAEA66",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 120,
  },
  img: {
    width: "80%",
    height: "41.66%",
  },
  colorBlock: {
    width: 20,
    height: 20,
    borderRadius: 4,
  },
  divider: {
    width: 2,
    height: "60%",
    backgroundColor: "#BDBDBD",
    marginHorizontal: 4,
  },
});
