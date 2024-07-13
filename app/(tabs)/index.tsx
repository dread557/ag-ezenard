import {
  Image,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  FlatList,
  useColorScheme,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Slider from "@/components/Home/Slider";
import Brands from "@/components/Home/Brands";
import SpecialOffers from "@/components/Home/SpecialOffers";
import { Colors } from "@/constants/Colors";
import Featured from "@/components/Home/Featured";
import useGetProducts from "@/hooks/useGetProducts";

export default function HomeScreen() {
  const { products } = useGetProducts();
  const colorScheme = useColorScheme();
  const data = [1];
  const renderHeader = () => (
    <>
      <View style={styles.topBar}>
        <Image
          source={require("@/assets/images/logo.png")}
          width={131.48}
          height={19.3}
          resizeMode="contain"
        />
        <Feather name="search" size={24} color="black" />
      </View>
      <View style={styles.welcome}>
        <View style={styles.initials}>
          <ThemedText style={{ fontSize: 19, fontWeight: "500" }}>
            AD
          </ThemedText>
        </View>
        <View>
          <ThemedText lightColor="#707070">Good afternoon 👋🏽</ThemedText>
          <ThemedText style={styles.name}>Ada Dennis</ThemedText>
        </View>
      </View>
      <Slider products={products} />
    </>
  );
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        backgroundColor: Colors[colorScheme ?? "light"].background,
      }}
    >
      <FlatList
        data={data}
        renderItem={() => null}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={() => (
          <>
            <Brands />
            <SpecialOffers />
            <Featured />
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  welcome: {
    flexDirection: "row",
    gap: 6,
  },
  initials: {
    justifyContent: "center",
    alignItems: "center",
    width: 49,
    height: 48,
    backgroundColor: "#E89705",
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "#FFA500",
  },
  greeting: {
    fontSize: 15,
  },
  name: {
    fontSize: 19,
    fontWeight: 500,
  },
});
