import React from "react";
import { useColorScheme } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";
import { Colors } from "react-native/Libraries/NewAppScreen";

const OrdersIcon = (props: SvgProps & { focused: boolean }) => {
  const { focused } = props;
  const colorScheme = useColorScheme();
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12.167 7.5H15.5003"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M12.167 10.4167H14.667"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M14.667 2.5H6.33366C4.03247 2.5 2.16699 4.36548 2.16699 6.66667V13.3333C2.16699 15.6345 4.03247 17.5 6.33366 17.5H14.667C16.9682 17.5 18.8337 15.6345 18.8337 13.3333V6.66667C18.8337 4.36548 16.9682 2.5 14.667 2.5Z"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeWidth="1.5"
        stroke-linejoin="round"
      />
      <Path
        d="M4.66699 13.3334C5.67392 11.1825 9.42716 11.041 10.5003 13.3334"
        stroke={focused ? "white" : "#555555"}
        strokeWidth="1.5"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.25033 7.49992C9.25033 8.42042 8.50413 9.16659 7.58366 9.16659C6.66318 9.16659 5.91699 8.42042 5.91699 7.49992C5.91699 6.57944 6.66318 5.83325 7.58366 5.83325C8.50413 5.83325 9.25033 6.57944 9.25033 7.49992Z"
        stroke={focused ? "white" : "#555555"}
        strokeWidth="1.5"
      />
    </Svg>
  );
};

export default OrdersIcon;
