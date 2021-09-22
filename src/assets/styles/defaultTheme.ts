import { COLORS } from "./colors";

export const BREAK_POINTS = ["481px", "768px", "992px", "1201px", "1441px"];

export const defaultTheme = {
  breakpoints: BREAK_POINTS,
  primary: {
    accentYellow: COLORS.ACCENT_YELLOW,
    accentYellow2: COLORS.ACCENT_YELLOW2,
    accentYellow3: COLORS.ACCENT_YELLOW3,
    blue: COLORS.BLUE,
    blue2: COLORS.BLUE2,
    dark1: COLORS.DARK1,
    dark2: COLORS.DARK2,
    dark3: COLORS.DARK3,
    darkBlue: COLORS.DARK_BLUE,
    gray: COLORS.GRAY,
    background: COLORS.BACKGROUD,
    white: COLORS.WHITE,
    warning: COLORS.WARNING,
    success: COLORS.SUCCESS,
    error: COLORS.ERROR,
  },
  fonts: {
    primary: "Poppins, sans-serif",
  },
};
