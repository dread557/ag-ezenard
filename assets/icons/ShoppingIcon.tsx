import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const ShoppingIcon = () => {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <Path
        d="M2.17042 8.43905L1.58893 4.96778C1.49434 4.40315 1.44705 4.12084 1.59268 3.93542C1.73831 3.75 2.00734 3.75 2.54539 3.75H9.4546C9.99265 3.75 10.2617 3.75 10.4073 3.93542C10.5529 4.12084 10.5056 4.40315 10.411 4.96778L9.82955 8.43905C9.6245 9.6632 9.522 10.2752 9.11595 10.6376C8.70995 11 8.1267 11 6.9602 11H5.0398C3.87332 11 3.29007 11 2.88404 10.6376C2.47801 10.2752 2.37548 9.6632 2.17042 8.43905Z"
        stroke="#0072C6"
      />
      <Path
        d="M3.5 3.75V3.5C3.5 2.11929 4.61929 1 6 1C7.3807 1 8.5 2.11929 8.5 3.5V3.75"
        stroke="#0072C6"
      />
      <Path d="M2.25 8.75H9.75" stroke="#0072C6" />
    </Svg>
  );
};

export default ShoppingIcon;

const styles = StyleSheet.create({});
