import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import { useLocalSearchParams, useRouter } from "expo-router";
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
import useGetSingleProduct from "@/hooks/useGetSingleProduct";
import { useCart } from "@/contexts/CartContext";
import useGetProducts from "@/hooks/useGetProducts";
import { IProduct } from "@/types";

const Detail = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const { id, rating } = useLocalSearchParams();
  const productId = Array.isArray(id) ? id[0] : id;
  const { dispatch, state } = useCart();
  const {
    product,
    loading: productLoading,
    refetch,
  } = useGetSingleProduct(productId || "");
  const { products, loading: productsLoading } = useGetProducts();

  const [brandProducts, setBrandProducts] = useState<IProduct[]>([]);

  const brand = product?.extra_infos.find((p: any) => p.key === "brand")?.value;

  const cartItem = state.cart.find((item) => item.id === productId);
  const quantity = cartItem ? cartItem.quantity : 1;
  const handleIncrement = () => {
    if (product) {
      if (cartItem) {
        dispatch({ type: "INCREASE_QUANTITY", payload: { id: product.id } });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
      }
    }
  };

  const handleDecrement = () => {
    if (product && quantity > 1) {
      dispatch({ type: "DECREASE_QUANTITY", payload: { id: product.id } });
    }
  };

  const addToCart = () => {
    if (product) {
      if (cartItem) {
        dispatch({ type: "INCREASE_QUANTITY", payload: { id: product.id } });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
      }
    }
    router.push("/cart");
  };

  const totalPrice =
    product?.current_price && !Array.isArray(product?.current_price)
      ? (quantity * product?.current_price).toLocaleString()
      : "0";

  const parseRating = Array.isArray(rating) ? rating[0] : rating;

  useEffect(() => {
    refetch();
  }, [productId]);

  useEffect(() => {
    if (!productsLoading && !productLoading && brand) {
      const filteredProducts = products.filter((p) => p.brand === brand);
      setBrandProducts(filteredProducts);
    }
  }, [products, product, productsLoading, productLoading, brand]);

  const renderHeader = () => (
    <>
      <Pressable
        style={{ paddingHorizontal: 20 }}
        onPress={() => router.back()}
      >
        <ArrowLeftIcon />
      </Pressable>
      {product?.photos && <ImageSlider photos={product?.photos} />}
    </>
  );

  if (productLoading || productsLoading) {
    return (
      <SafeAreaView style={{ justifyContent: "center", flex: 1 }}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].background,
      }}
    >
      <>
        <FlatList
          data={[1]}
          renderItem={() => null}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={
            <View style={{ paddingHorizontal: 20, paddingBottom: 80 }}>
              {product && (
                <ProductInfo
                  product={product}
                  rating={parseRating}
                  brand={brand}
                />
              )}
              <Sizes />
              <ProductColors />
              <Quantity
                quantity={quantity}
                increment={handleIncrement}
                decrement={handleDecrement}
              />
              <More
                products={brandProducts}
                brand={brand || product?.categories[0]?.name || ""}
              />
            </View>
          }
          keyExtractor={(index) => index.toString()}
          showsVerticalScrollIndicator={false}
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
              ₦ {totalPrice}
            </ThemedText>
          </View>
          <Pressable style={styles.addToCartBtn} onPress={() => addToCart()}>
            <ShoppingWhiteIcon />
            <Text style={{ fontSize: 15, fontWeight: 600, color: "white" }}>
              Add to cart
            </Text>
          </Pressable>
        </View>
      </>
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
