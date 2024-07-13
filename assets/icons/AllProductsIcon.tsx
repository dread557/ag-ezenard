import { Colors } from "@/constants/Colors";
import React from "react";
import { useColorScheme } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";

export const AllProductIcon = (props: SvgProps & { focused: boolean }) => {
  const { focused } = props;
  const colorScheme = useColorScheme();
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M13.833 4.16675C13.833 3.39018 13.833 3.0019 13.9598 2.69561C14.129 2.28723 14.4535 1.96277 14.8618 1.79361C15.1682 1.66675 15.5564 1.66675 16.333 1.66675C17.1096 1.66675 17.4978 1.66675 17.8042 1.79361C18.2125 1.96277 18.537 2.28723 18.7062 2.69561C18.833 3.0019 18.833 3.39018 18.833 4.16675V7.50008C18.833 8.27665 18.833 8.66491 18.7062 8.97125C18.537 9.37958 18.2125 9.70408 17.8042 9.87325C17.4978 10.0001 17.1096 10.0001 16.333 10.0001C15.5564 10.0001 15.1682 10.0001 14.8618 9.87325C14.4535 9.70408 14.129 9.37958 13.9598 8.97125C13.833 8.66491 13.833 8.27665 13.833 7.50008V4.16675Z"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeWidth="1.5"
      />
      <Path
        d="M13.833 15.8333C13.833 15.0567 13.833 14.6684 13.9598 14.3621C14.129 13.9538 14.4535 13.6293 14.8618 13.4601C15.1682 13.3333 15.5564 13.3333 16.333 13.3333C17.1096 13.3333 17.4978 13.3333 17.8042 13.4601C18.2125 13.6293 18.537 13.9538 18.7062 14.3621C18.833 14.6684 18.833 15.0567 18.833 15.8333C18.833 16.6098 18.833 16.9981 18.7062 17.3044C18.537 17.7128 18.2125 18.0373 17.8042 18.2064C17.4978 18.3333 17.1096 18.3333 16.333 18.3333C15.5564 18.3333 15.1682 18.3333 14.8618 18.2064C14.4535 18.0373 14.129 17.7128 13.9598 17.3044C13.833 16.9981 13.833 16.6098 13.833 15.8333Z"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeWidth="1.5"
      />
      <Path
        d="M2.16699 13.3333C2.16699 11.762 2.16699 10.9763 2.65515 10.4882C3.1433 10 3.92898 10 5.50033 10H7.16699C8.73834 10 9.52399 10 10.0122 10.4882C10.5003 10.9763 10.5003 11.762 10.5003 13.3333V15C10.5003 16.5713 10.5003 17.357 10.0122 17.8452C9.52399 18.3333 8.73834 18.3333 7.16699 18.3333H5.50033C3.92898 18.3333 3.1433 18.3333 2.65515 17.8452C2.16699 17.357 2.16699 16.5713 2.16699 15V13.3333Z"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeWidth="1.5"
      />
      <Path
        d="M2.16699 4.16675C2.16699 3.39018 2.16699 3.0019 2.29386 2.69561C2.46302 2.28723 2.78748 1.96277 3.19585 1.79361C3.50214 1.66675 3.89043 1.66675 4.66699 1.66675H8.00033C8.77689 1.66675 9.16516 1.66675 9.47149 1.79361C9.87983 1.96277 10.2043 2.28723 10.3735 2.69561C10.5003 3.0019 10.5003 3.39018 10.5003 4.16675C10.5003 4.94331 10.5003 5.3316 10.3735 5.63789C10.2043 6.04626 9.87983 6.37072 9.47149 6.53988C9.16516 6.66675 8.77689 6.66675 8.00033 6.66675H4.66699C3.89043 6.66675 3.50214 6.66675 3.19585 6.53988C2.78748 6.37072 2.46302 6.04626 2.29386 5.63789C2.16699 5.3316 2.16699 4.94331 2.16699 4.16675Z"
        stroke={focused ? Colors[colorScheme ?? "light"].tint : "#555555"}
        strokeWidth="1.5"
      />
    </Svg>
  );
};