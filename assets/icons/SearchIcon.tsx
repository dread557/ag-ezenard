import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SearchIcon() {
  return (
    <Svg width={20} height={21} viewBox="0 0 20 21" fill="none">
      <Path
        d="M14.584 14.605l3.75 3.75"
        stroke="#2A2A2A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.666 9.188a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0z"
        stroke="#141B34"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SearchIcon;
