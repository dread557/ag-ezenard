import React, { useRef } from "react";
import { Paystack } from "react-native-paystack-webview";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ICheckoutForm } from "@/types";
import { useOrder } from "@/contexts/OrderContext";
import { useCart } from "@/contexts/CartContext";

interface Props extends ICheckoutForm {
  amount: string;
}

const PaystackButton = ({ email, name, amount, phoneNumber }: Props) => {
  const { addOrder } = useOrder();
  const { state, dispatch } = useCart();
  const paystackWebViewRef = useRef<any>();
  const router = useRouter();
  const onSuccess = (res: any) => {
    const order = {
      reference: res.data.transactionRef.reference,
      date: new Date().toISOString(),
      amount: parseFloat(amount),
      status: res.data.transactionRef.status,
      products: state.cart.map((item) => ({
        id: item.id,
        name: item.name,
        image: item.photos[0]?.url,
        quantity: item.quantity,
        price: Array.isArray(item.current_price)
          ? item.current_price[0].NGN[0]
          : item.current_price,
      })),
    };
    addOrder(order);
    dispatch({ type: "CLEAR_CART" });
    router.push("/success");
  };
  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_72bd6ad760c6e942d7667078f68d23ef351b5f5b"
        billingEmail={email}
        billingName={name}
        phone={phoneNumber}
        currency="NGN"
        amount={amount}
        onCancel={(e) => {
          console.log("payment error", e);
        }}
        onSuccess={onSuccess}
        ref={paystackWebViewRef}
      />
      <Pressable
        style={styles.btn}
        onPress={() => paystackWebViewRef.current?.startTransaction()}
      >
        <Text style={{ fontWeight: 500, fontSize: 15, color: "white" }}>
          Proceed to payment
        </Text>
      </Pressable>
    </View>
  );
};

export default PaystackButton;

const styles = StyleSheet.create({
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
