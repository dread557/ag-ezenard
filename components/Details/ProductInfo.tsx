import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import LikeIcon from "@/assets/icons/LikeIcon";
import RatingIcon from "@/assets/icons/RatingIcon";
import { IProduct } from "@/types";
import { useWishlist } from "@/contexts/WishListContext";
import LikeOutlineIcon from "@/assets/icons/LikeOutlineIcon";

const ProductInfo = ({
  product,
  rating,
  brand,
}: {
  product: IProduct;
  rating?: string;
  brand: string;
}) => {
  const { state: favoriteState, dispatch: favoriteDispatch } = useWishlist();
  const isLiked = favoriteState.favorites.some(
    (favItem) => favItem.id === product.id
  );
  const handleLike = () => {
    if (isLiked) {
      favoriteDispatch({ type: "REMOVE_FROM_FAVORITES", payload: product.id });
    } else {
      favoriteDispatch({ type: "ADD_TO_FAVORITES", payload: product });
    }
  };
  return (
    <View>
      <ThemedText style={{ fontSize: 12 }}>
        {brand || product.categories[0].name}
      </ThemedText>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ThemedText style={{ fontWeight: 600, fontSize: 24 }}>
          {product.name}
        </ThemedText>
        <Pressable onPress={handleLike}>
          {isLiked ? <LikeIcon /> : <LikeOutlineIcon />}
        </Pressable>
      </View>
      <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
        {" "}
        ₦ {product.current_price.toLocaleString()}
      </ThemedText>
      <View
        style={{
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <ThemedText style={{ fontSize: 12 }}>100 sold</ThemedText>
        <RatingIcon />
        <ThemedText style={{ fontSize: 12 }}>{rating || 0}</ThemedText>
      </View>
      <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
        Description
      </ThemedText>
      <ThemedText
        lightColor="#555555"
        style={{ fontSize: 15, lineHeight: 17.58 }}
      >
        {product.description}
      </ThemedText>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({});
