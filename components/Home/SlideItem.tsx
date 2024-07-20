import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import ShoppingIcon from "@/assets/icons/ShoppingIcon";
import { LinearGradient } from "expo-linear-gradient";
import { IProduct } from "@/types";
import { useRouter } from "expo-router";
import { capitalizeWords, shortenWords } from "@/utils/misc";

const { width } = Dimensions.get("screen");

const SlideItem = ({ product }: { product: IProduct }) => {
  const router = useRouter();
  const imageUrl = `https://api.timbu.cloud/images/${product.photos[0]?.url}`;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0072C6CC", "#003760E5"]}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.itemBg}
      >
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.img}
          onError={(e) =>
            console.error("Image loading error:", e.nativeEvent.error)
          }
        />

        <View>
          <Text style={{ fontSize: 10, color: "white" }}>
            {capitalizeWords(product?.brand || product.categories[0]?.name)}
          </Text>
          <View style={{ flexDirection: "row", gap: 3 }}>
            <Text style={{ fontSize: 14, fontWeight: 600, color: "white" }}>
              {shortenWords(capitalizeWords(product.name))}
            </Text>
            {Array.isArray(product?.current_price) && (
              <Text style={{ fontSize: 14, fontWeight: 500, color: "white" }}>
                ₦{product.current_price[0].NGN[0].toLocaleString()}
              </Text>
            )}
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Pressable
              style={styles.btn}
              onPress={() => router.push(`/(details)/${product.id}`)}
            >
              <ShoppingIcon />
              <Text style={{ fontSize: 12, fontWeight: 500, color: "#0072C6" }}>
                Add to cart
              </Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 16,
    width: width - 40,
  },
  itemBg: {
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    alignItems: "center",
    height: "100%",
    padding: 16,
  },
  img: {
    height: 154,
    width: 154,
    resizeMode: "contain",
  },
  btn: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    height: 30,
    marginTop: 12,
    width: 113,
  },
});
