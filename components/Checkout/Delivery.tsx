import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import AddressInputIcon from "@/assets/icons/AddressInputIcon";

const { width } = Dimensions.get("screen");

const Delivery = () => {
  const [address, setAddress] = useState("Ikeja, Lagos");
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
          Delivery option
        </ThemedText>
        <Pressable onPress={toggleEditing}>
          <ThemedText
            style={{ color: "#0072C6", fontSize: 15, fontWeight: 600 }}
          >
            {isEditing ? "Save" : "Edit"}
          </ThemedText>
        </Pressable>
      </View>
      <View style={styles.box}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <AddressInputIcon />
            <ThemedText style={{ fontSize: 12, fontWeight: 500 }}>
              Pick up joint
            </ThemedText>
          </View>
          <TextInput
            style={[
              styles.input,
              { color: Colors[colorScheme ?? "light"].text },
            ]}
            editable={isEditing}
            value={address}
            onChangeText={(text) => setAddress(text)}
            placeholder="Address"
          />
        </View>
      </View>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: "#F9F9F9",
    padding: 16,
    borderRadius: 8,
  },
  input: {
    fontSize: 12,
  },
});