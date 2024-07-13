import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";
import NameInputIcon from "@/assets/icons/NameInputIcon";
import PhoneInputIcon from "@/assets/icons/PhoneInputIcon";
import EmailInputIcon from "@/assets/icons/EmailInputIcon";
import { Colors } from "@/constants/Colors";

type InfoKeys = "name" | "phoneNumber" | "email";

const PersonalInfo = () => {
  const [info, setInfo] = useState({
    name: "Ada Dennis",
    phoneNumber: "0901100101",
    email: "ad@gmail.com",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (key: InfoKeys, value: string) => {
    setInfo({ ...info, [key]: value });
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
          Personal information
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
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <NameInputIcon />
            <TextInput
              style={[
                styles.input,
                { color: Colors[colorScheme ?? "light"].text },
              ]}
              editable={isEditing}
              value={info.name}
              onChangeText={(text) => handleInputChange("name", text)}
              placeholder="Name"
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <PhoneInputIcon />
            <TextInput
              style={[
                styles.input,
                { color: Colors[colorScheme ?? "light"].text },
              ]}
              editable={isEditing}
              value={info.phoneNumber}
              onChangeText={(text) => handleInputChange("phoneNumber", text)}
              placeholder="Phone Number"
              keyboardType="phone-pad"
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <EmailInputIcon />
          <TextInput
            style={[
              styles.input,
              { color: Colors[colorScheme ?? "light"].text },
            ]}
            editable={isEditing}
            value={info.email}
            onChangeText={(text) => handleInputChange("email", text)}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
      </View>
    </View>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
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
