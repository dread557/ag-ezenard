import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import LikeOutlineIcon from "@/assets/icons/LikeOutlineIcon";
import LikeIcon from "@/assets/icons/LikeIcon";
import { ThemedText } from "./ThemedText";
import RatingIcon from "@/assets/icons/RatingIcon";
import AddToCartIcon from "@/assets/icons/AddToCartIcon";
import { IProduct } from "@/types";
import { useCart } from "@/contexts/CartContext";
import CustomAlert from "./CustomAlert";
import { useWishlist } from "@/contexts/WishListContext";

const ProductCard = ({ item }: { item: IProduct }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const { dispatch } = useCart();
  const { state: favoriteState, dispatch: favoriteDispatch } = useWishlist();
  const imageUrl = `https://api.timbu.cloud/images/${item?.photos[0]?.url}`;

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: 1 } });
    setAlertVisible(true);
  };

  const isLiked = favoriteState.favorites.some(
    (favItem) => favItem.id === item.id
  );

  const handleLike = () => {
    if (isLiked) {
      favoriteDispatch({ type: "REMOVE_FROM_FAVORITES", payload: item.id });
    } else {
      favoriteDispatch({ type: "ADD_TO_FAVORITES", payload: item });
    }
  };

  return (
    <View style={styles.wrapper}>
      <CustomAlert
        visible={alertVisible}
        message={`Added ${item?.name} to cart`}
        onClose={() => setAlertVisible(false)}
      />
      <View style={styles.imgWrapper}>
        <Pressable style={styles.like} onPress={handleLike}>
          {isLiked ? <LikeIcon /> : <LikeOutlineIcon />}
        </Pressable>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
      <Link
        href={{
          pathname: `/(details)/${item?.id}`,
          params: { rating: item?.rating },
        }}
      >
        <View>
          <ThemedText
            lightColor="#2A2A2A"
            style={{ fontSize: 10, lineHeight: 11.72, marginTop: 10 }}
          >
            {item?.brand || item?.categories[0]?.name}
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
            {item?.name}
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
              {item?.rating}
            </ThemedText>
            {/* <ThemedText style={{ fontSize: 10, lineHeight: 11.72 }}>
              (100 sold)
            </ThemedText> */}
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
            ₦
            {Array.isArray(item?.current_price) &&
              item?.current_price[0].NGN[0].toLocaleString()}
          </ThemedText>
          {item?.discounted_price && (
            <ThemedText
              lightColor="#9D9D9D"
              style={{
                fontWeight: 500,
                fontSize: 12,
                lineHeight: 14.06,
                textDecorationLine: "line-through",
              }}
            >
              ₦{item?.discounted_price.toLocaleString()}
            </ThemedText>
          )}
        </View>
        <Pressable onPress={() => addToCart()}>
          <AddToCartIcon />
        </Pressable>
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
    // padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EAEAEA66",
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  like: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30.8,
    height: 30.8,
    zIndex: 100,
  },
  strikethrough: {},
});
