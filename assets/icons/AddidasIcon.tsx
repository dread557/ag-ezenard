import { View, Text } from "react-native";
import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const AddidasIcon = () => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <G clipPath="url(#clip0_2470_15782)">
        <Path
          d="M20.5805 11.4692L24.5 17.9987H18.2045L14.462 11.7602L11.627 7.03972L14.462 5.33572L16.247 4.26172L20.5805 11.4692ZM14.462 15.4307L15.998 17.9987H9.707L6.2135 12.1847L6.0605 11.9312L6.2135 11.8412L10.6865 9.14872L14.462 15.4307ZM6.2135 15.8507L7.502 17.9987H1.2065L0.5 16.8197L5.1245 14.0417L6.2135 15.8507Z"
          fill="#263238"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2470_15782">
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

export default AddidasIcon;
