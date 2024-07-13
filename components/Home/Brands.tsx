import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NikeIcon from "@/assets/icons/NikeIcon";
import GucciIcon from "@/assets/icons/GucciIcon";
import JordanIcon from "@/assets/icons/JordanIcon";
import BalenciagaIcon from "@/assets/icons/BalenciagaIcon";
import AddidasIcon from "@/assets/icons/AddidasIcon";
import RebokIcon from "@/assets/icons/RebokIcon";
import NewBalanceIcon from "@/assets/icons/NewBalanceIcon";
import { ThemedText } from "../ThemedText";

const DATA = [
  {
    name: "Nike",
    icon: <NikeIcon />,
  },
  {
    name: "Gucci",
    icon: <GucciIcon />,
  },
  {
    name: "Jordan",
    icon: <JordanIcon />,
  },
  {
    name: "Balenciga",
    icon: <BalenciagaIcon />,
  },
  {
    name: "Addidas",
    icon: <AddidasIcon />,
  },
  {
    name: "Reebok",
    icon: <RebokIcon />,
  },
  {
    name: "New Balance",
    icon: <NewBalanceIcon />,
  },
  {
    name: "New Balancex",
    icon: <NewBalanceIcon />,
  },
];

const Brands = () => {
  return (
    <View style={styles.container}>
      {DATA?.map((each, index) => (
        <View
          key={index}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.iconWrapper}>{each.icon}</View>
          <ThemedText
            style={{ fontSize: 10, marginTop: 8 }}
            lightColor="#2a2a2a"
          >
            {each.name}
          </ThemedText>
        </View>
      ))}
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    columnGap: 40,
    marginTop: 30,
    rowGap: 20,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 99999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
  },
});
