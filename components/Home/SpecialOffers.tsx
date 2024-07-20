import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import ProductCard from "../ProductCard";
import useGetProducts from "@/hooks/useGetProducts";
import { IProduct } from "@/types";
import { formatList } from "@/utils/misc";

const SpecialOffers = () => {
  const { products } = useGetProducts();
  const specialOfferProducts = products.filter((product) =>
    product.categories.some((category) => category.name === "special offers")
  );

  return (
    <View style={{ marginTop: 30 }}>
      <ThemedText
        style={{ fontSize: 24, fontWeight: 500, marginVertical: 15 }}
        lightColor="#000000"
      >
        Our Special Offers
      </ThemedText>
      <FlatList
        style={styles.productsWrapper}
        data={specialOfferProducts}
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
    </View>
  );
};

export default SpecialOffers;

const styles = StyleSheet.create({
  productsWrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
