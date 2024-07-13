import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import LikeIcon from "@/assets/icons/LikeIcon";
import RatingIcon from "@/assets/icons/RatingIcon";

const ProductInfo = () => {
  return (
    <View>
      <ThemedText style={{ fontSize: 12 }}>Iconic Casual Brands</ThemedText>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ThemedText style={{ fontWeight: 600, fontSize: 24 }}>
          Ego Vessel
        </ThemedText>
        <LikeIcon />
      </View>
      <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
        {" "}
        ₦ 37,000.00
      </ThemedText>
      <View
        style={{
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <ThemedText style={{ fontSize: 12 }}>100 sold</ThemedText>
        <RatingIcon />
        <ThemedText style={{ fontSize: 12 }}>4.5 (32 reviews)</ThemedText>
      </View>
      <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
        Description
      </ThemedText>
      <ThemedText
        lightColor="#555555"
        style={{ fontSize: 15, lineHeight: 17.58 }}
      >
        The Ego Vessel is the perfect addition to your casual wardrobe. Pair
        them with jeans, joggers, or even a dress for an effortlessly cool look
        that's sure to make a statement. Whether you're running errands or
        hitting the town, these versatile sneakers will keep you feeling and
        looking your best.
      </ThemedText>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({});
