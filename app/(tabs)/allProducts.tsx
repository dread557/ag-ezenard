import ProductCard from "@/components/ProductCard";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import useGetProducts from "@/hooks/useGetProducts";
import {
  StyleSheet,
  useColorScheme,
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const { products, loading } = useGetProducts();
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].background,
        paddingHorizontal: 20,
      }}
    >
      {loading ? (
        <View style={{ justifyContent: "center", flex: 1, marginTop: 50 }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View>
          <ThemedText
            style={{ fontSize: 20, fontWeight: "700", marginVertical: 20 }}
          >
            Shop with us today 🥰
          </ThemedText>
          <FlatList
            style={styles.productsWrapper}
            data={products}
            renderItem={({ item }) => <ProductCard item={item} />}
            keyExtractor={(item) => item.unique_id}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productsWrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  columnWrapper: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  contentContainer: {
    paddingBottom: 180,
    justifyContent: "space-between",
  },
});
