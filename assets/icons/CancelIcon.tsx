import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const CancelIcon = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M15 5L10 10M10 10L5 15M10 10L15 15M10 10L5 5"
        stroke="#2A2A2A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CancelIcon;

const styles = StyleSheet.create({});
