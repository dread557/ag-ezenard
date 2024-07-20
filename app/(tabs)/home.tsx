import {
  Image,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  FlatList,
  useColorScheme,
  ActivityIndicator,
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
import LogoIcon from "@/assets/icons/LogoIcon";

export default function HomeScreen() {
  const { products, loading } = useGetProducts();
  const colorScheme = useColorScheme();
  const renderHeader = () => (
    <>
      <View style={styles.topBar}>
        <LogoIcon />
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
      {loading ? (
        <View style={{ justifyContent: "center", flex: 1, marginTop: 50 }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={[1]}
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
      )}
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
