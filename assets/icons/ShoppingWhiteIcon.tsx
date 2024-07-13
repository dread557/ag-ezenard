import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const ShoppingWhiteIcon = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M2.8939 11.2521L2.11857 6.62371C1.99246 5.87087 1.92941 5.49445 2.12358 5.24722C2.31775 5 2.67645 5 3.39386 5H12.6061C13.3235 5 13.6823 5 13.8764 5.24722C14.0706 5.49445 14.0075 5.87087 13.8814 6.62371L13.1061 11.2521C12.8327 12.8843 12.696 13.7003 12.1546 14.1835C11.6133 14.6667 10.8356 14.6667 9.28027 14.6667H6.71973C5.16443 14.6667 4.38676 14.6667 3.84539 14.1835C3.30402 13.7003 3.16731 12.8843 2.8939 11.2521Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <Path
        d="M4.66699 5.00016V4.66683C4.66699 2.82588 6.15938 1.3335 8.00033 1.3335C9.84126 1.3335 11.3337 2.82588 11.3337 4.66683V5.00016"
        stroke="white"
        strokeWidth="1.5"
      />
      <Path d="M3 11.6665H13" stroke="white" strokeWidth="1.5" />
    </Svg>
  );
};

export default ShoppingWhiteIcon;

const styles = StyleSheet.create({});
