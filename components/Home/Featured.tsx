import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import ProductCard from "../ProductCard";
import useGetProducts from "@/hooks/useGetProducts";
import { useRouter } from "expo-router";

const Featured = () => {
  const { products } = useGetProducts();
  const featuredProducts = products.filter((product) =>
    product.categories.some((category) => category.name === "featured sneakers")
  );
  const data = featuredProducts.slice(0, 6);
  const router = useRouter();
  return (
    <View style={{ marginTop: 30 }}>
      <ThemedText
        style={{ fontSize: 24, fontWeight: 500, marginVertical: 15 }}
        lightColor="#000000"
      >
        Featured Sneakers
      </ThemedText>
      <FlatList
        style={styles.productsWrapper}
        data={data}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.unique_id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 30,
        }}
        contentContainerStyle={{ paddingBottom: 180 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 35,
        }}
      >
        <Pressable
          onPress={() => {
            router.push("/(tabs)/allProducts");
          }}
          style={styles.btn}
        >
          <ThemedText
            style={{
              color: "#fff",
              fontSize: 15,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            View more
          </ThemedText>
        </Pressable>
      </View>
    </View>
  );
};

export default Featured;

const styles = StyleSheet.create({
  productsWrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#0072C6",
    width: 104,
    height: 42,
    borderRadius: 8,
    justifyContent: "center",
    alignContent: "center",
  },
});
