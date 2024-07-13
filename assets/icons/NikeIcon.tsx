import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const NikeIcon = () => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <G clipPath="url(#clip0_2470_15777)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.4966 11.3505L8.35962 12.4335C6.89862 12.795 5.62062 13.2765 4.38912 12.855C2.71512 12.132 2.74512 10.251 3.99312 8.25C1.78662 10.071 -2.18388 15.894 3.18612 16.482C3.87012 16.572 5.08812 16.332 6.41112 15.7755L12.4966 13.278L24.4996 8.37L13.9876 10.959L12.4966 11.3505Z"
          fill="#263238"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2470_15777">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default NikeIcon;
