/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        light: {
          primary: "#F45A8D",
          surfaceTint: "#F45A8D",
          onPrimary: "#FFFFFF",
          primaryContainer: "#FFD4E1",
          onPrimaryContainer: "#3F0020",
          secondary: "#F2965A",
          onSecondary: "#FFFFFF",
          secondaryContainer: "#FFE1D0",
          onSecondaryContainer: "#4F1E00",
          tertiary: "#F4955E",
          onTertiary: "#FFFFFF",
          tertiaryContainer: "#FFE2C5",
          onTertiaryContainer: "#4C2100",
          error: "#BA1A1A",
          onError: "#FFFFFF",
          errorContainer: "#FFDAD6",
          onErrorContainer: "#410002",
          background: "#FFF6F3",
          onBackground: "#1F1A1A",
          surface: "#FFF6F3",
          onSurface: "#1F1A1A",
          surfaceVariant: "#FFE7E0",
          onSurfaceVariant: "#5A2D24",
          outline: "#915853",
          outlineVariant: "#D8C4C0",
          shadow: "#000000",
          scrim: "#000000",
          inverseSurface: "#341A16",
          inverseOnSurface: "#FBE6E2",
          inversePrimary: "#FFC0CC",
          primaryFixed: "#FFD4E1",
          onPrimaryFixed: "#3F0020",
          primaryFixedDim: "#FFB1CA",
          onPrimaryFixedVariant: "#933954",
          secondaryFixed: "#FFE1D0",
          onSecondaryFixed: "#4F1E00",
          secondaryFixedDim: "#FFC9AE",
          onSecondaryFixedVariant: "#8E4B1A",
          tertiaryFixed: "#FFE2C5",
          onTertiaryFixed: "#4C2100",
          tertiaryFixedDim: "#FFC7A2",
          onTertiaryFixedVariant: "#8C5417",
          surfaceDim: "#EED1CC",
          surfaceBright: "#FFF6F3",
          surfaceContainerLowest: "#FFFFFF",
          surfaceContainerLow: "#FFF1EE",
          surfaceContainer: "#FFEDEB",
          surfaceContainerHigh: "#FFE6E3",
          surfaceContainerHighest: "#FFE0DD",
        },
        dark: {
          primary: "#FFB9AC", // Soft peach pink
          surfaceTint: "#FFB9AC",
          onPrimary: "#59261A", // Deep reddish-brown
          primaryContainer: "#874534", // Muted terracotta
          onPrimaryContainer: "#FFD9CF", // Light peach pink
          secondary: "#FFE0B4", // Soft pastel orange
          onSecondary: "#57320C", // Warm brown
          secondaryContainer: "#7C4F24", // Muted orange-brown
          onSecondaryContainer: "#FFEAD3", // Light pastel cream
          tertiary: "#B8E3E0", // Soft aqua
          onTertiary: "#00322E", // Deep teal
          tertiaryContainer: "#23524F", // Muted teal
          onTertiaryContainer: "#CFEFEF", // Light pastel aqua
          error: "#FFB3B3", // Light red
          onError: "#750000", // Deep red
          errorContainer: "#930000", // Darker red
          onErrorContainer: "#FFE5E5", // Light red tint
          background: "#1A1918", // Dark gray-brown
          onBackground: "#EAE5E3", // Soft white
          surface: "#1A1918", // Same as background
          onSurface: "#EAE5E3", // Soft white
          surfaceVariant: "#4A423D", // Muted brown
          onSurfaceVariant: "#D5C9C2", // Soft pastel gray
          outline: "#A89185", // Light brown-gray
          outlineVariant: "#4A423D", // Same as surfaceVariant
          shadow: "#000000", // Black
          scrim: "#000000", // Black
          inverseSurface: "#EAE5E3", // Soft white
          inverseOnSurface: "#302B28", // Darker gray-brown
          inversePrimary: "#FFB9AC", // Same as primary
          primaryFixed: "#FFD9CF", // Light peach pink
          onPrimaryFixed: "#4A211C", // Muted red-brown
          primaryFixedDim: "#FFB9AC", // Same as primary
          onPrimaryFixedVariant: "#834238", // Muted terracotta
          secondaryFixed: "#FFEAD3", // Light pastel cream
          onSecondaryFixed: "#57320C", // Warm brown
          secondaryFixedDim: "#FFE0B4", // Same as secondary
          onSecondaryFixedVariant: "#7C4F24", // Same as secondaryContainer
          tertiaryFixed: "#CFEFEF", // Light pastel aqua
          onTertiaryFixed: "#00322E", // Deep teal
          tertiaryFixedDim: "#B8E3E0", // Same as tertiary
          onTertiaryFixedVariant: "#23524F", // Same as tertiaryContainer
          surfaceDim: "#241F1E", // Dark gray-brown
          surfaceBright: "#483F3C", // Slightly lighter gray-brown
          surfaceContainerLowest: "#151312", // Very dark gray-brown
          surfaceContainerLow: "#1A1918", // Same as background
          surfaceContainer: "#241F1E", // Dark gray-brown
          surfaceContainerHigh: "#2F2927", // Slightly lighter
          surfaceContainerHighest: "#392F2C", // Lightest dark gray-brown
        },
      },

      space: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        13: "52px",
        14: "56px",
        15: "60px",
        16: "64px",
        17: "68px",
        18: "72px",
        19: "76px",
        20: "80px",
        21: "84px",
        22: "88px",
        23: "92px",
        24: "96px",
        25: "100px",
        26: "104px",
        27: "108px",
        28: "112px",
        29: "116px",
        30: "120px",
      },
      boxShadow: {
        elevation1:
          "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        elevation2:
          "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
        elevation3:
          "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)",
        elevation4:
          "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.30)",
        elevation5:
          "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30)",
      },
      borderRadius: {
        none: "0",
        extraSmall: "4px",
        small: "8px",
        medium: "12px",
        large: "16px",
        extraLarge: "28px",
        full: "1000px",
      },
      fontSize: {
        displayLarge: [
          "57px",
          {
            fontWeight: "400",
            lineHeight: "64px",
            letterSpacing: "-0.25px",
          },
        ],
        displayMedium: [
          "45px",
          {
            fontWeight: "400",
            lineHeight: "52px",
            letterSpacing: "0",
          },
        ],
        displaySmall: [
          "36px",
          {
            fontWeight: "400",
            lineHeight: "44px",
            letterSpacing: "0",
          },
        ],
        headlineLarge: [
          "32px",
          {
            fontWeight: "400",
            lineHeight: "40px",
            letterSpacing: "0",
          },
        ],
        headlineMedium: [
          "28px",
          {
            fontWeight: "400",
            lineHeight: "36px",
            letterSpacing: "0",
          },
        ],
        headlineSmall: [
          "24px",
          {
            fontWeight: "400",
            lineHeight: "32px",
            letterSpacing: "0",
          },
        ],
        titleLarge: [
          "22px",
          {
            fontWeight: "400",
            lineHeight: "28px",
            letterSpacing: "0",
          },
        ],
        titleMedium: [
          "16px",
          {
            fontWeight: "500",
            lineHeight: "24px",
            letterSpacing: "0.15px",
          },
        ],
        titleSmall: [
          "14px",
          {
            fontWeight: "500",
            lineHeight: "20px",
            letterSpacing: "0.1px",
          },
        ],
        bodyLarge: [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "0.5px",
          },
        ],
        bodyMedium: [
          "14px",
          {
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0.25px",
          },
        ],
        bodySmall: [
          "12px",
          {
            fontWeight: "400",
            lineHeight: "16px",
            letterSpacing: "0.4px",
          },
        ],
        labelLarge: [
          "14px",
          {
            fontWeight: "500",
            lineHeight: "20px",
            letterSpacing: "0.1px",
          },
        ],
        labelMedium: [
          "12px",
          {
            fontWeight: "500",
            lineHeight: "16px",
            letterSpacing: "0.5px",
          },
        ],
        labelSmall: [
          "11px",
          {
            fontWeight: "500",
            lineHeight: "16px",
            letterSpacing: "0.5px",
          },
        ],
      },
      transitionDuration: {
        short1: "50ms",
        short2: "100ms",
        short3: "150ms",
        short4: "200ms",
        medium1: "250ms",
        medium2: "300ms",
        medium3: "350ms",
        medium4: "400ms",
        long1: "450ms",
        long2: "500ms",
        long3: "550ms",
        long4: "600ms",
        extraLong1: "700ms",
        extraLong2: "800ms",
        extraLong3: "900ms",
        extraLong4: "1000ms",
      },
      transitionDelay: {
        short1: "50ms",
        short2: "100ms",
        short3: "150ms",
        short4: "200ms",
        medium1: "250ms",
        medium2: "300ms",
        medium3: "350ms",
        medium4: "400ms",
        long1: "450ms",
        long2: "500ms",
        long3: "550ms",
        long4: "600ms",
        extraLong1: "700ms",
        extraLong2: "800ms",
        extraLong3: "900ms",
        extraLong4: "1000ms",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0, 0, 1)",
        standardDecelerate: "cubic-bezier(0, 0, 0, 1)",
        standardAccelerate: "cubic-bezier(0.3, 0, 1, 1)",
        emphasized: "cubic-bezier(0.2, 0, 0, 1.0)",
        emphasizedDecelerate: "cubic-bezier(0.05, 0.7, 0.1, 1)",
        emphasizedAccelerate: "cubic-bezier(0.3, 0, 0.8, 0.15)",
        legacy: "cubic-bezier(0.4, 0, 0.2, 1.0)",
        legacyDecelerate: "cubic-bezier(0, 0, 0.2, 1)",
        legacyAccelerate: "cubic-bezier(0.4, 0, 1, 1)",
        linear: "cubic-bezier(0, 0, 1, 1)",
      },
    },
  },
  plugins: [],
};
