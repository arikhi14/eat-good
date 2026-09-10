import "@/global.css";

import { Platform } from "react-native";

export const Colors = {
  light: {
    text: "#1C1C1C",
    background: "#FAFAF9",

    primary: "#0D9488",
    accent: "#6750A4",

    backgroundElement: "#FFFFFF",
    backgroundSelected: "#E7F5F3",

    textSecondary: "#6B7280",
    border: "#E7E5E4",
  },

  dark: {
    text: "#FAFAF9",
    background: "#111111",

    primary: "#0D9488",
    accent: "#6750A4",

    backgroundElement: "#1C1C1C",
    backgroundSelected: "#163D39",

    textSecondary: "#A8A29E",
    border: "#292524",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: "SpaceGrotesk-Regular",
    serif: "SpaceGrotesk-Regular",
    rounded: "SpaceGrotesk-Medium",
    mono: "ui-monospace",
  },

  android: {
    sans: "SpaceGrotesk-Regular",
    serif: "SpaceGrotesk-Regular",
    rounded: "SpaceGrotesk-Medium",
    mono: "monospace",
  },

  default: {
    sans: "SpaceGrotesk-Regular",
    serif: "SpaceGrotesk-Regular",
    rounded: "SpaceGrotesk-Medium",
    mono: "monospace",
  },

  web: {
    sans: "Space Grotesk",
    serif: "Space Grotesk",
    rounded: "Space Grotesk",
    mono: "monospace",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset =
  Platform.select({
    ios: 50,
    android: 80,
  }) ?? 0;

export const MaxContentWidth = 800;
