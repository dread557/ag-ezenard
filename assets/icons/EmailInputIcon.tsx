import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const EmailInputIcon = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M1.33301 3.3335L5.94169 5.94991C7.62547 6.90583 8.37387 6.90583 10.0577 5.94991L14.6663 3.3335"
        stroke="#0072C6"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <Path
        d="M6.99967 12.9998C6.68881 12.9958 6.37755 12.9898 6.06556 12.982C3.96656 12.9292 2.91706 12.9028 2.16298 12.1454C1.40889 11.388 1.3871 10.3656 1.34352 8.32077C1.32951 7.66324 1.3295 7.00964 1.34351 6.35212C1.3871 4.30726 1.40889 3.28482 2.16297 2.52743C2.91706 1.77004 3.96656 1.74366 6.06555 1.69089C7.35921 1.65837 8.64014 1.65838 9.93381 1.6909C12.0328 1.74366 13.0823 1.77005 13.8363 2.52744C14.5905 3.28483 14.6123 4.30726 14.6558 6.35213C14.6623 6.65484 14.6657 6.7975 14.6663 6.99984"
        stroke="#0072C6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.667 11.3335C12.667 11.8858 12.2193 12.3335 11.667 12.3335C11.1147 12.3335 10.667 11.8858 10.667 11.3335C10.667 10.7812 11.1147 10.3335 11.667 10.3335C12.2193 10.3335 12.667 10.7812 12.667 11.3335ZM12.667 11.3335V11.6668C12.667 12.2191 13.1147 12.6668 13.667 12.6668C14.2193 12.6668 14.667 12.2191 14.667 11.6668V11.3335C14.667 9.67663 13.3239 8.3335 11.667 8.3335C10.0101 8.3335 8.66699 9.67663 8.66699 11.3335C8.66699 12.9904 10.0101 14.3335 11.667 14.3335"
        stroke="#0072C6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EmailInputIcon;