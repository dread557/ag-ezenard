import React from "react";
import { useColorScheme } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";
import { Colors } from "react-native/Libraries/NewAppScreen";

const OrdersIcon = (props: SvgProps & { focused: boolean }) => {
  const { focused } = props;
  const colorScheme = useColorScheme();
  return (
    <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
      <Path
        d="M18.833 11.25V6.667H2.166v4.523c0 3.367 0 5.051 1.085 6.097 1.005.97 2.578 1.04 5.582 1.046"
        fill={focused ? Colors[colorScheme ?? "light"].tint : "white"}
      />
      <Path
        d="M18.833 11.25V6.667H2.166v4.523c0 3.367 0 5.051 1.085 6.097 1.005.97 2.578 1.04 5.582 1.046"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M14.666 15.416h.008-.008z" fill="#0072C6" />
      <Path
        d="M14.666 15.416h.008"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.643 15.019c.127.177.19.266.19.398 0 .131-.063.22-.19.398-.569.798-2.023 2.518-3.976 2.518-1.954 0-3.408-1.72-3.977-2.518-.127-.178-.19-.267-.19-.398 0-.132.063-.22.19-.398.57-.798 2.023-2.519 3.977-2.519 1.954 0 3.407 1.72 3.976 2.519z"
        fill={focused ? "white" : Colors[colorScheme ?? "light"].tint}
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeWidth={1.5}
      />
      <Path
        d="M2.166 6.667l.801-1.924C3.59 3.252 3.9 2.506 4.53 2.086c.63-.42 1.438-.42 3.054-.42h5.833c1.616 0 2.424 0 3.053.42.63.42.94 1.166 1.562 2.657l.802 1.923"
        fill={focused ? "white" : Colors[colorScheme ?? "light"].tint}
      />
      <Path
        d="M2.166 6.667l.801-1.924C3.59 3.252 3.9 2.506 4.53 2.086c.63-.42 1.438-.42 3.054-.42h5.833c1.616 0 2.424 0 3.053.42.63.42.94 1.166 1.562 2.657l.802 1.923"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path d="M10.5 6.667v-5 5z" fill="#0072C6" />
      <Path
        d="M10.5 6.667v-5"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M8.834 10h3.333-3.333z"
        fill={focused ? Colors[colorScheme ?? "light"].tint : "white"}
      />
      <Path
        d="M8.834 10h3.333"
        stroke={focused ? "#555555" : Colors[colorScheme ?? "light"].tint}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default OrdersIcon;
