import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const StyledButton = styled("button")<{}>(() => ({
  width: "fit-content",
  border: "none",
  padding: "8px",
  borderRadius: "8px",
  cursor: "pointer",
  background: Colors.BackgroundLight,
  color: Colors.PrimaryAccentDark,
  fontSize: "16px",
  transition: "all 0.2s linear",

  "&:hover": {
    background: Colors.Divider,
  },
}));

// export const ButtonBasic = styled.button`
//   width: fit-content;
//   border: none;
//   padding: 8px;
//   border-radius: 8px;
//   cursor: pointer;
//   background: ${Colors.BackgroundLight};
//   color: ${Colors.PrimaryAccentDark};
//   font-size: 16px;
//   transition: all 0.2s linear;

//   &:hover {
//     background: ${Colors.Divider};
//   }
// `;
