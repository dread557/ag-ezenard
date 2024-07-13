import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import ProductCard from "../ProductCard";

const Featured = () => {
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
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
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
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 35,
        }}
      >
        <Pressable onPress={() => {}} style={styles.btn}>
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
