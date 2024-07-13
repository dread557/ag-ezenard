import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import { ThemedText } from "@/components/ThemedText";
import OrderList from "@/components/Checkout/OrderList";
import { Colors } from "@/constants/Colors";
import PersonalInfo from "@/components/Checkout/PersonalInfo";
import Delivery from "@/components/Checkout/Delivery";
import PriceSummary from "@/components/Checkout/PriceSummary";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import PaymentForm from "@/components/Checkout/PaymentForm";

const checkout = () => {
  const [isOpened, setIsOpened] = useState(false);
  const bottomSheetRef = useRef<any>(null);
  const snapPoints = ["65%"];
  const handlePresentModal = () => {
    bottomSheetRef && bottomSheetRef.current?.present();
    setIsOpened(true);
  };
  const handleCloseModal = () => {
    bottomSheetRef && bottomSheetRef.current?.close();
    setIsOpened(false);
  };
  const colorScheme = useColorScheme();
  const router = useRouter();
  const renderHeader = () => (
    <>
      <OrderList />
    </>
  );
  return (
    <BottomSheetModalProvider>
      <SafeAreaView
        style={{
          backgroundColor: !isOpened
            ? Colors[colorScheme ?? "light"].background
            : "#00000029",
          flex: 1,
          paddingHorizontal: 20,
        }}
      >
        {isOpened && <View style={styles.overlay} />}
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
            Checkout
          </ThemedText>
        </View>
        <FlatList
          data={[1]}
          renderItem={() => null}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={
            <View style={{ paddingBottom: 80 }}>
              <PersonalInfo />
              <Delivery />
              <PriceSummary />
              <View style={styles.bottom}>
                <Pressable
                  onPress={() => router.back()}
                  style={[
                    { width: 79, backgroundColor: "#F9F9F9" },
                    styles.btn,
                  ]}
                >
                  <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
                    Cancel
                  </ThemedText>
                </Pressable>
                <Pressable
                  onPress={handlePresentModal}
                  style={[
                    { width: 88, backgroundColor: "#0072C6" },
                    styles.btn,
                  ]}
                >
                  <ThemedText
                    style={{ fontSize: 15, fontWeight: 500, color: "white" }}
                  >
                    Proceed
                  </ThemedText>
                </Pressable>
              </View>
            </View>
          }
          keyExtractor={(index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 16 }}
        onDismiss={handleCloseModal}
      >
        <PaymentForm handleCloseModal={handleCloseModal} />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default checkout;

const styles = StyleSheet.create({
  bottom: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 30,
  },
  btn: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 42,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#00000029",
    zIndex: 1,
  },
});
