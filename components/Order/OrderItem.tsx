import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import { IOrder } from "@/types";

const OrderItem = ({ item }: { item: IOrder }) => {
  return (
    <View style={styles.orderContainer}>
      {item.products.map((product) => (
        <View key={product.id} style={styles.container}>
          <View style={styles.imgWrapper}>
            <Image
              style={styles.img}
              source={{
                uri: `https://api.timbu.cloud/images/${product.image} `,
              }}
            />
          </View>
          <View
            style={{ gap: 8, justifyContent: "center", position: "relative" }}
          >
            <ThemedText style={{ fontSize: 15, fontWeight: "500" }}>
              {product.name}
            </ThemedText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={[{ backgroundColor: "#000000" }, styles.colorBlock]}
                />
                <ThemedText
                  lightColor="#555555"
                  style={{ fontSize: 12, marginLeft: 8 }}
                >
                  Black
                </ThemedText>
              </View>
              <View style={styles.divider} />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ThemedText>Size</ThemedText>
                <View
                  style={{
                    width: 25,
                    height: 26,
                    backgroundColor: "#F9F9F9",
                    alignItems: "center",
                    marginLeft: 6,
                  }}
                >
                  <ThemedText lightColor="#555555" style={{ fontSize: 15 }}>
                    39
                  </ThemedText>
                </View>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", gap: 2, alignItems: "center" }}
            >
              <ThemedText style={{ fontSize: 15, fontWeight: "500" }}>
                ₦ {product.price}
              </ThemedText>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderContainer: {
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    height: 152,
    borderWidth: 1,
    borderColor: "#F9F9F9",
    borderRadius: 8,
    padding: 16,
    gap: 20,
  },
  imgWrapper: {
    backgroundColor: "#EAEAEA66",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 120,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  colorBlock: {
    width: 20,
    height: 20,
    borderRadius: 4,
  },
  divider: {
    width: 2,
    height: "60%",
    backgroundColor: "#BDBDBD",
    marginHorizontal: 4,
  },
  input: {
    width: 25,
    height: 26,
    textAlign: "center",
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 5,
    backgroundColor: "#0072C61F",
    alignItems: "center",
  },
});
