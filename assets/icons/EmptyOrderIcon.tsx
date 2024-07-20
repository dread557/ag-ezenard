import React from "react";
import Svg, { Circle, G, Rect, Path, Defs } from "react-native-svg";

const EmptyOrderIcon = () => {
  return (
    <Svg width={152} height={124} viewBox="0 0 152 124" fill="none">
      <Circle cx={76} cy={58} r={52} fill="#EAECF0" />
      <Circle cx={21} cy={25} r={5} fill="#F2F4F7" />
      <Circle cx={18} cy={109} r={7} fill="#F2F4F7" />
      <Circle cx={145} cy={41} r={7} fill="#F2F4F7" />
      <Circle cx={134} cy={14} r={4} fill="#F2F4F7" />
      <G filter="url(#filter0_b_4511_7808)">
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
          d="M86 59.5V54H66v5.429c0 4.04 0 6.06 1.302 7.316 1.206 1.163 3.093 1.248 6.698 1.254M81 64.5h.009"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M85.772 64.022c.152.214.228.32.228.478 0 .158-.076.264-.228.478C85.089 65.934 83.345 68 81 68s-4.089-2.065-4.772-3.022c-.152-.214-.228-.32-.228-.478 0-.158.076-.264.228-.478C76.911 63.065 78.655 61 81 61s4.089 2.065 4.772 3.022z"
          stroke="#fff"
          strokeWidth={1.5}
        />
        <Path
          d="M66 54l.962-2.308c.745-1.79 1.118-2.684 1.874-3.188S70.56 48 72.5 48h7c1.939 0 2.908 0 3.664.504.756.504 1.129 1.399 1.874 3.188L86 54M76 54v-6M74 58h4"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};

export default EmptyOrderIcon;
