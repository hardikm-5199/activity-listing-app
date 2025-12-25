import { MD3LightTheme, MD3DarkTheme, type MD3Theme } from "react-native-paper";

const brandColors = {
  primary: "#2563EB",
  onPrimary: "#FFFFFF",
};

export const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,

    // Core brand
    primary: brandColors.primary,
    onPrimary: brandColors.onPrimary,

    secondary: "#64748B", // Slate
    secondaryContainer: "#E5E7EB", // Light grey
    onSecondaryContainer: "#111827",

    surfaceVariant: "#F1F5F9", // Card/chip background
    outline: "#CBD5E1",
  },
};

export const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,

    primary: brandColors.primary,
    onPrimary: brandColors.onPrimary,

    secondary: "#94A3B8",
    secondaryContainer: "#1E293B",
    onSecondaryContainer: "#E5E7EB",

    surfaceVariant: "#1F2937",
    outline: "#334155",
  },
};
