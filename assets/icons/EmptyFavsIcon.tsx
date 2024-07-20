import React from "react";
import Svg, { Circle, Defs, G, Rect, Path } from "react-native-svg";

const EmptyFavsIcon = () => {
  return (
    <Svg width={152} height={124} viewBox="0 0 152 124" fill="none">
      <Circle cx={76} cy={58} r={52} fill="#EAECF0" />
      <Circle cx={21} cy={25} r={5} fill="#F2F4F7" />
      <Circle cx={18} cy={109} r={7} fill="#F2F4F7" />
      <Circle cx={145} cy={41} r={7} fill="#F2F4F7" />
      <Circle cx={134} cy={14} r={4} fill="#F2F4F7" />
      <G filter="url(#filter0_b_4511_7648)">
        <Rect
          x={52}
          y={34}
          width={48}
          height={48}
          rx={24}
          fill="#344054"
          fillOpacity={0.4}
        />
        <Path
          d="M83.463 49.994c-2.682-1.645-5.023-.982-6.429.074-.576.433-.864.65-1.034.65-.17 0-.458-.217-1.034-.65-1.406-1.056-3.747-1.719-6.429-.074-3.519 2.159-4.315 9.28 3.802 15.29C73.886 66.427 74.66 67 76 67c1.341 0 2.114-.572 3.66-1.717 8.118-6.008 7.322-13.13 3.803-15.289z"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};

export default EmptyFavsIcon;
