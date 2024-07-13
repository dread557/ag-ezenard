import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React from "react";
import ShoppingIcon from "@/assets/icons/ShoppingIcon";
import { LinearGradient } from "expo-linear-gradient";
import { IProduct } from "@/types";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("screen");

const SlideItem = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0072C6CC", "#003760E5"]}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.itemBg}
      >
        <Image
          style={styles.img}
          source={{ uri: "https://github.com/dread557.png" }}
        />
        <View>
          <Text style={{ fontSize: 10, color: "white" }}>
            Iconic Casual Brands
          </Text>
          <View style={{ flexDirection: "row", gap: 3 }}>
            <Text style={{ fontSize: 14, fontWeight: 600, color: "white" }}>
              Ego Vessel
            </Text>
            <Text style={{ fontSize: 14, fontWeight: 500, color: "white" }}>
              ₦ 37,000
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Pressable
              style={styles.btn}
              onPress={() => router.push("/details[id]")}
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
