import Svg, { Path, Rect } from "react-native-svg";
import React from "react";

const LikeIcon = () => {
  return (
    <Svg width="31" height="31" viewBox="0 0 31 31" fill="none">
      <Rect x="0.200195" width="30.8" height="30.8" rx="15.4" fill="#D42620" />
      <Path
        d="M21.1975 9.39552C19.1863 8.16183 17.4309 8.65899 16.3764 9.45091C15.9439 9.77562 15.7278 9.93798 15.6006 9.93798C15.4734 9.93798 15.2572 9.77562 14.8248 9.45091C13.7703 8.65899 12.0149 8.16183 10.0037 9.39552C7.36414 11.0146 6.76688 16.3561 12.8552 20.8625C14.0149 21.7208 14.5947 22.1499 15.6006 22.1499C16.6065 22.1499 17.1863 21.7208 18.346 20.8625C24.4343 16.3561 23.837 11.0146 21.1975 9.39552Z"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default LikeIcon;
