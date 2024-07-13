import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const LikeOutlineIcon = () => {
  return (
    <Svg width="32" height="31" viewBox="0 0 32 31" fill="none">
      <Rect
        x="0.5"
        width="30.8"
        height="30.8"
        rx="15.4"
        fill="black"
        fillOpacity="0.6"
      />
      <Path
        d="M21.4973 9.39552C19.4861 8.16183 17.7307 8.65899 16.6762 9.45091C16.2437 9.77562 16.0276 9.93798 15.9004 9.93798C15.7732 9.93798 15.557 9.77562 15.1246 9.45091C14.0701 8.65899 12.3147 8.16183 10.3035 9.39552C7.66394 11.0146 7.06668 16.3561 13.155 20.8625C14.3147 21.7208 14.8945 22.1499 15.9004 22.1499C16.9063 22.1499 17.4861 21.7208 18.6458 20.8625C24.7341 16.3561 24.1368 11.0146 21.4973 9.39552Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default LikeOutlineIcon;
