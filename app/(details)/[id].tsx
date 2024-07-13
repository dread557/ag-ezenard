import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import { useRouter } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ImageSlider from "@/components/Details/ImageSlider";
import ProductInfo from "@/components/Details/ProductInfo";
import ProductColors from "@/components/Details/ProductColors";
import Sizes from "@/components/Details/Sizes";
import Quantity from "@/components/Details/Quantity";
import More from "@/components/Details/More";
import { ThemedText } from "@/components/ThemedText";
import ShoppingIcon from "@/assets/icons/ShoppingIcon";
import ShoppingWhiteIcon from "@/assets/icons/ShoppingWhiteIcon";

const Detail = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const renderHeader = () => (
    <>
      <Pressable
        style={{ paddingHorizontal: 20 }}
        onPress={() => router.back()}
      >
        <ArrowLeftIcon />
      </Pressable>
      <ImageSlider />
    </>
  );
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].background,
      }}
    >
      <FlatList
        data={[1]}
        renderItem={() => null}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={
          <View style={{ paddingHorizontal: 20, paddingBottom: 80 }}>
            <ProductInfo />
            <Sizes />
            <ProductColors />
            <Quantity />
            <More />
          </View>
        }
        keyExtractor={(index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.bottomBar}>
        <View>
          <ThemedText lightColor="#9D9D9D" style={{ fontSize: 12 }}>
            Total price
          </ThemedText>
          <ThemedText style={{ fontSize: 19, fontWeight: 500 }}>
            {" "}
            ₦ 37,000.00
          </ThemedText>
        </View>
        <Pressable
          style={styles.addToCartBtn}
          onPress={() => router.push("/cart")}
        >
          <ShoppingWhiteIcon />
          <Text style={{ fontSize: 15, fontWeight: 600, color: "white" }}>
            Add to cart
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#F9F9F94D",
  },
  addToCartBtn: {
    width: 141,
    height: 42,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: "#0072C6",
    borderRadius: 8,
    flexDirection: "row",
  },
});
