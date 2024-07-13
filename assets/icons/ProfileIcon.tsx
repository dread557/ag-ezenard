import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { Colors } from "@/constants/Colors";

const ProfileIcon = (props: SvgProps & { focused: boolean }) => {
  const { focused } = props;
  const colorScheme = useColorScheme();
  return (
    <Svg viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.667 7.5H15.0003H11.667Z"
        fill={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
      />
      <Path
        d="M11.667 7.5H15.0003"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeLinecap="round"
      />
      <Path
        d="M11.667 10.4167H14.167H11.667Z"
        fill={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
      />
      <Path
        d="M11.667 10.4167H14.167"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeLinecap="round"
      />
      <Path
        d="M14.167 2.5H5.83366C3.53247 2.5 1.66699 4.36548 1.66699 6.66667V13.3333C1.66699 15.6345 3.53247 17.5 5.83366 17.5H14.167C16.4682 17.5 18.3337 15.6345 18.3337 13.3333V6.66667C18.3337 4.36548 16.4682 2.5 14.167 2.5Z"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeLinejoin="round"
      />
      <Path
        d="M4.16699 13.3334C5.17392 11.1825 8.92716 11.041 10.0003 13.3334"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.75033 7.49992C8.75033 8.42042 8.00413 9.16659 7.08366 9.16659C6.16318 9.16659 5.41699 8.42042 5.41699 7.49992C5.41699 6.57944 6.16318 5.83325 7.08366 5.83325C8.00413 5.83325 8.75033 6.57944 8.75033 7.49992Z"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
      />
    </Svg>
  );
};

export default ProfileIcon;

const styles = StyleSheet.create({});
