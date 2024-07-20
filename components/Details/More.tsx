import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import ProductCard from "../ProductCard";
import { IProduct } from "@/types";

const More = ({ products, brand }: { products: IProduct[]; brand: string }) => {
  const renderFooter = () => {
    if (products.length % 2 !== 0) {
      return <View style={{ flex: 1, padding: 16 }} />;
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <ThemedText style={{ fontSize: 24, fontWeight: 500, marginBottom: 6 }}>
        More from {brand}
      </ThemedText>
      <FlatList
        style={styles.productsWrapper}
        data={products}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.unique_id}
        ListFooterComponent={renderFooter}
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

export default More;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  productsWrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
