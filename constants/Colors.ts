/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0072C6";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#2A2A2A",
    background: "#fff",
    tint: tintColorLight,
    icon: "#555555",
    tabIconDefault: "#555555",
    tabIconSelected: tintColorLight,
    tabBar: "#F9F9F9B2",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    tabBar: "#151718",
  },
};
