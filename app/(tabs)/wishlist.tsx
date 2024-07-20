import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import { useRouter } from "expo-router";
import SearchIcon from "@/assets/icons/SearchIcon";
import EmptyFavsIcon from "@/assets/icons/EmptyFavsIcon";
import { useWishlist } from "@/contexts/WishListContext";
import ItemSeparator from "@/components/ItemSeparator";
import ProductCard from "@/components/ProductCard";

const Wishlist = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const { state } = useWishlist();
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].background,
        paddingHorizontal: 16,
        flex: 1,
      }}
    >
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={{ paddingHorizontal: 20 }}
            onPress={() => router.back()}
          >
            <ArrowLeftIcon />
          </Pressable>
          <ThemedText style={{ fontWeight: 600, fontSize: 19, marginLeft: 5 }}>
            My Wishlist
          </ThemedText>
        </View>
        <Pressable>
          <SearchIcon />
        </Pressable>
      </View>
      {state.favorites.length > 0 ? (
        <FlatList
          style={styles.productsWrapper}
          data={state.favorites}
          renderItem={({ item }) => <ProductCard item={item} />}
          keyExtractor={(item) => item.unique_id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View style={styles.empty}>
          <EmptyFavsIcon />
          <ThemedText
            lightColor="#2A2A2A"
            style={{ fontWeight: "500", fontSize: 15, marginTop: 10 }}
          >
            You have not added any item to your wish list
          </ThemedText>
          <Pressable
            style={styles.btn}
            onPress={() => router.push("/allProducts")}
          >
            <Text style={{ fontWeight: 500, fontSize: 15, color: "white" }}>
              Discover products
            </Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
    marginBottom: 40,
  },
  empty: {
    justifyContent: "center",
    alignItems: "center",
  },
  productsWrapper: {
    flex: 1,
  },
  columnWrapper: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  contentContainer: {
    paddingBottom: 180,
  },
  btn: {
    width: "100%",
    height: 42,
    borderRadius: 8,
    backgroundColor: "#0072C6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});
