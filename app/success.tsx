import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import SuccessIcon from "@/assets/icons/SuccessIcon";
import { ThemedText } from "@/components/ThemedText";

const success = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].background,
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <View style={styles.container}>
        <SuccessIcon />
        <ThemedText style={{ fontWeight: "500", fontSize: 19 }}>
          Payment successful
        </ThemedText>
        <ThemedText
          lightColor="#707070"
          style={{ textAlign: "center", fontSize: 19 }}
        >
          You have successfully placed an order. Details of your order has been
          sent to your email.
        </ThemedText>
        <Pressable style={styles.btn} onPress={() => router.push("/")}>
          <Text style={{ fontWeight: 500, fontSize: 15, color: "white" }}>
            Okay
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
