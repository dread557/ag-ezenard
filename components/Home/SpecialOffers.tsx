import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import ProductCard from "../ProductCard";

const SpecialOffers = () => {
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
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <ProductCard />}
        keyExtractor={(item, index) => index.toString()}
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
