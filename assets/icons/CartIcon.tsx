import { Colors } from "@/constants/Colors";
import React from "react";
import { useColorScheme } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";

const CartIcon = (props: SvgProps & { focused: boolean }) => {
  const { focused, ...svgProps } = props;
  const colorScheme = useColorScheme();
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...svgProps}>
      <Path
        d="M3.61737 14.0651L2.64822 8.27964C2.49057 7.33858 2.41176 6.86806 2.65447 6.55903C2.89718 6.25 3.34557 6.25 4.24232 6.25H15.7577C16.6544 6.25 17.1028 6.25 17.3455 6.55903C17.5883 6.86806 17.5094 7.33858 17.3518 8.27964L16.3826 14.0651C16.0408 16.1053 15.87 17.1254 15.1932 17.7293C14.5166 18.3333 13.5445 18.3333 11.6003 18.3333H8.39967C6.45553 18.3333 5.48345 18.3333 4.80674 17.7293C4.13002 17.1254 3.95914 16.1053 3.61737 14.0651Z"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        fill={focused ? Colors[colorScheme ?? "light"].tint : "none"}
        strokeWidth="1.5"
      />
      <Path
        d="M5.83301 6.25008V5.83341C5.83301 3.53223 7.69849 1.66675 9.99967 1.66675C12.3008 1.66675 14.1663 3.53223 14.1663 5.83341V6.25008"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        fill={focused ? Colors[colorScheme ?? "light"].tint : "none"}
        strokeWidth="1.5"
      />
      <Path
        d="M3.75 14.5833H16.25"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeWidth="1.5"
      />
    </Svg>
  );
};

export default CartIcon;
