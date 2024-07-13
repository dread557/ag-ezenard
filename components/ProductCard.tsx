import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import LikeOutlineIcon from "@/assets/icons/LikeOutlineIcon";
import LikeIcon from "@/assets/icons/LikeIcon";
import { ThemedText } from "./ThemedText";
import RatingIcon from "@/assets/icons/RatingIcon";
import AddToCartIcon from "@/assets/icons/AddToCartIcon";

const ProductCard = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.imgWrapper}>
        <Pressable style={styles.like} onPress={handleLike}>
          {liked ? <LikeIcon /> : <LikeOutlineIcon />}
        </Pressable>
        <Image
          style={styles.image}
          source={{ uri: "https://github.com/dread557.png" }}
        />
      </View>
      <Link
        href={{
          pathname: "/details[id]",
        }}
      >
        <View>
          <ThemedText
            lightColor="#2A2A2A"
            style={{ fontSize: 10, lineHeight: 11.72, marginTop: 10 }}
          >
            Athletic/Sportswear
          </ThemedText>
          <ThemedText
            lightColor="#2A2A2A"
            style={{
              fontSize: 12,
              fontWeight: 600,
              lineHeight: 14.06,
              marginTop: 3,
            }}
          >
            Air Jordan Running Sneaker
          </ThemedText>
          <View
            style={{
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
              marginTop: 7,
            }}
          >
            <RatingIcon />
            <ThemedText style={{ fontSize: 10, lineHeight: 11.72 }}>
              4.5
            </ThemedText>
            <ThemedText style={{ fontSize: 10, lineHeight: 11.72 }}>
              (100 sold)
            </ThemedText>
          </View>
        </View>
      </Link>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <View>
          <ThemedText
            lightColor="#0072C6"
            darkColor="#0072C6"
            style={{ fontWeight: 600, fontSize: 12, lineHeight: 14.06 }}
          >
            ₦ 28,000.00
          </ThemedText>
          <ThemedText
            lightColor="#9D9D9D"
            style={{
              fontWeight: 500,
              fontSize: 12,
              lineHeight: 14.06,
              textDecorationLine: "line-through",
            }}
          >
            ₦32,500.00
          </ThemedText>
        </View>
        <AddToCartIcon />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  wrapper: {
    width: "47%",
    margin: "1%",
    position: "relative",
  },
  imgWrapper: {
    width: "100%",
    borderRadius: 8,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EAEAEA66",
    height: 180,
  },
  image: {
    width: 100,
    height: 100,
  },
  like: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30.8,
    height: 30.8,
  },
  strikethrough: {},
});
