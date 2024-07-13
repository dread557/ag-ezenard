import { Colors } from "@/constants/Colors";
import React from "react";
import { useColorScheme } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";

export const HomeIcon = (props: SvgProps & { focused: boolean }) => {
  const { focused, ...svgProps } = props;
  const colorScheme = useColorScheme();
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M7.55137 4.02194L2.69926 8.26778C2.28317 8.63192 2.56215 9.27858 3.13532 9.27858C3.48549 9.27858 3.76937 9.54075 3.76937 9.86425V12.5672C3.76937 14.8925 3.76937 16.0552 4.55147 16.7776C5.33357 17.5 6.59235 17.5 9.10992 17.5H10.8901C13.4077 17.5 14.6664 17.5 15.4485 16.7776C16.2307 16.0552 16.2307 14.8925 16.2307 12.5672V9.86425C16.2307 9.54075 16.5145 9.27858 16.8647 9.27858C17.4378 9.27858 17.7168 8.63192 17.3007 8.26778L12.4486 4.02194C11.2891 3.00732 10.7093 2.5 10 2.5C9.29067 2.5 8.71092 3.00732 7.55137 4.02194Z"
        fill={focused ? Colors[colorScheme ?? "light"].tint : "white"}
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
      />
      <Path d="M10 13.3333H10.0075H10Z" fill="white" />
      <Path
        d="M10 13.3333H10.0075"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
