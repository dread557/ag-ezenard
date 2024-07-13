import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowLeftIcon = () => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <Path
        d="M4 12.022H20"
        stroke="#2A2A2A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.99996 17.022C8.99996 17.022 4.00001 13.3396 4 12.022C3.99999 10.7044 9 7.02197 9 7.02197"
        stroke="#141B34"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowLeftIcon;
