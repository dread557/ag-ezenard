import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import CancelIcon from "@/assets/icons/CancelIcon";
import AtmCardIcon from "@/assets/icons/AtmCardIcon";
import { useRouter } from "expo-router";

const PaymentForm = ({ handleCloseModal }: { handleCloseModal: any }) => {
  const router = useRouter();
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
            value={"Ada Dennis"}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            editable={false}
            style={styles.input}
            value={"ad@gmaill.com"}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            editable={false}
            style={styles.input}
            value={"09100000000"}
          />
        </View>
        <Pressable style={styles.btn} onPress={() => router.push("/success")}>
          <Text style={{ fontWeight: 500, fontSize: 15, color: "white" }}>
            Proceed to payment
          </Text>
        </Pressable>
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
