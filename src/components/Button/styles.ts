import styled from "styled-components";
import { Colors } from "../../constants/colors";

const getButtonVariant = (variant: string) => {
  switch (variant) {
    case "light":
      return {
        background: Colors.BackgroundLight,
        color: Colors.PrimaryAccentDark,

        "&:hover": {
          background: Colors.Divider,
        },
      };
    case "dark":
      return {
        background: Colors.TextTertiary,
        color: Colors.BackgroundLight,

        "&:hover": {
          background: Colors.TextPrimary,
        },
      };
    default:
      return {
        background: Colors.TextTertiary,
        color: Colors.BackgroundLight,

        "&:hover": {
          background: Colors.TextPrimary,
        },
      };
  }
};

export const StyledButton = styled("button")<{ $variant?: string }>(
  ({ $variant }) => ({
    width: "fit-content",
    height: "fit-content",
    border: "none",
    padding: "8px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s linear",
    fontSize: "16px",

    ...getButtonVariant($variant || "dark"),
  })
);
