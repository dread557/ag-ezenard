import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import ProductCard from "../ProductCard";

const More = () => {
  return (
    <View style={styles.container}>
      <ThemedText style={{ fontSize: 24, fontWeight: 500, marginBottom: 6 }}>
        More from Ego
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
