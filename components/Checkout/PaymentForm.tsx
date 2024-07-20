import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import CancelIcon from "@/assets/icons/CancelIcon";
import AtmCardIcon from "@/assets/icons/AtmCardIcon";
import { useRouter } from "expo-router";
import PaystackButton from "./PaystackButton";
import { ICheckoutForm } from "@/types";
import { useCart } from "@/contexts/CartContext";

const PaymentForm = ({
  handleCloseModal,
  userInfo,
}: {
  handleCloseModal: any;
  userInfo: ICheckoutForm;
}) => {
  const { getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 19, fontWeight: 500, color: "#2A2A2A" }}>
          Select a payment option
        </Text>
        <Pressable onPress={handleCloseModal}>
          <CancelIcon />
        </Pressable>
      </View>
      <AtmCardIcon />
      <View style={styles.form}>
        <View>
          <Text style={styles.inputLabel}>Full name</Text>
          <TextInput
            editable={false}
            style={styles.input}
            value={userInfo.name}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            editable={false}
            style={styles.input}
            value={userInfo.email}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            editable={false}
            style={styles.input}
            value={userInfo.phoneNumber}
          />
        </View>
        <PaystackButton
          amount={totalPrice.toString()}
          name={userInfo.name}
          phoneNumber={userInfo.phoneNumber}
          email={userInfo.email}
          address={userInfo.address}
        />
      </View>
    </View>
  );
};

export default PaymentForm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 13,
  },
  form: {
    gap: 12,
    marginTop: 15,
  },
  inputLabel: {
    fontSize: 12,
    color: "#2A2A2A",
    marginBottom: 6,
  },
  input: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8EAEB",
    fontSize: 12,
    fontWeight: "500",
    color: "#2A2A2A",
  },
});
