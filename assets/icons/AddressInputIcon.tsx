import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const AddressInputIcon = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M8.33301 14.6668H7.25894C4.46543 14.6668 3.06867 14.6668 2.20084 13.83C1.33301 12.9932 1.33301 11.6463 1.33301 8.95256V5.3335H14.6663V7.00016"
        stroke="#0072C6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9997 8C10.5269 8 9.33301 9.20593 9.33301 10.6935C9.33301 11.5442 9.66634 12.2055 10.333 12.7963C10.8029 13.2127 11.3722 13.9044 11.7139 14.465C11.8779 14.7339 12.1097 14.7339 12.2854 14.465C12.6445 13.9155 13.1964 13.2127 13.6663 12.7963C14.333 12.2055 14.6663 11.5442 14.6663 10.6935C14.6663 9.20593 13.4724 8 11.9997 8Z"
        stroke="#0072C6"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <Path
        d="M12 10.6665H12.006"
        stroke="#0072C6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.33301 5.3335L1.97403 3.79504C2.47118 2.60188 2.71976 2.0053 3.22361 1.6694C3.72745 1.3335 4.37375 1.3335 5.66634 1.3335H10.333C11.6256 1.3335 12.2719 1.3335 12.7757 1.6694C13.2796 2.0053 13.5281 2.60188 14.0253 3.79504L14.6663 5.3335"
        stroke="#0072C6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M8 5.3335V1.3335"
        stroke="#0072C6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M6.66699 8H8.00033"
        stroke="#0072C6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default AddressInputIcon;