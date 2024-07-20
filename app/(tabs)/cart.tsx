import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import CartItem from "@/components/Cart/CartItem";
import ItemSeparator from "@/components/ItemSeparator";
import { useCart } from "@/contexts/CartContext";

const cart = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const { state, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].background,
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <ArrowLeftIcon />
        </Pressable>
        <ThemedText
          lightColor="#292929"
          style={{ fontWeight: 600, fontSize: 19, marginLeft: 5 }}
        >
          My Cart
        </ThemedText>
      </View>
      {state.cart.length === 0 ? (
        <View>
          <ThemedText style={{ textAlign: "center" }}>
            No Item in cart.{" "}
          </ThemedText>
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
                Add items
              </ThemedText>
            </Pressable>
          </View>
        </View>
      ) : (
        <>
          <FlatList
            data={state.cart}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(item) => item.unique_id}
            ItemSeparatorComponent={() => <ItemSeparator />}
            contentContainerStyle={{ paddingBottom: 180 }}
          />
          <View style={styles.bottomBar}>
            <View>
              <ThemedText style={{ fontSize: 12, color: "#9D9D9D" }}>
                Total price
              </ThemedText>
              <ThemedText
                style={{ fontSize: 19, fontWeight: 500, color: "#2A2A2A" }}
              >
                {" "}
                ₦{totalPrice.toLocaleString()}
              </ThemedText>
            </View>
            <Pressable
              style={styles.addToCartBtn}
              onPress={() => router.push("/checkout")}
            >
              <Text style={{ fontSize: 15, fontWeight: 600, color: "white" }}>
                Checkout
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default cart;

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
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#F9F9F94D",
    paddingHorizontal: 20,
  },
  addToCartBtn: {
    width: 97,
    height: 42,
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: "#0072C6",
    borderRadius: 8,
    justifyContent: "center",
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
