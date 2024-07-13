import { View, Text } from "react-native";
import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const AddToCartIcon = () => {
  return (
    <Svg width="37" height="28" viewBox="0 0 37 28" fill="none">
      <Rect
        x="0.5"
        width="36"
        height="28"
        rx="8"
        fill="#0072C6"
        fillOpacity="0.12"
      />
      <Path
        d="M14.6704 16.439L14.0889 12.9678C13.9943 12.4031 13.9471 12.1208 14.0927 11.9354C14.2383 11.75 14.5073 11.75 15.0454 11.75H21.9546C22.4927 11.75 22.7617 11.75 22.9073 11.9354C23.0529 12.1208 23.0056 12.4031 22.911 12.9678L22.3295 16.439C22.1245 17.6632 22.022 18.2752 21.6159 18.6376C21.2099 19 20.6267 19 19.4602 19H17.5398C16.3733 19 15.7901 19 15.384 18.6376C14.978 18.2752 14.8755 17.6632 14.6704 16.439Z"
        stroke="#0072C6"
      />
      <Path
        d="M16 11.75V11.5C16 10.1193 17.1193 9 18.5 9C19.8807 9 21 10.1193 21 11.5V11.75"
        stroke="#0072C6"
      />
      <Path d="M14.75 16.75H22.25" stroke="#0072C6" />
    </Svg>
  );
};

export default AddToCartIcon;
