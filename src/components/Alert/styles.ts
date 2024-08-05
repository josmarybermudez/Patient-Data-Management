import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const AlertContainer = styled("div")<{}>(() => ({
  position: "fixed",
  top: "20px",
  right: "20px",
  background: Colors.PrimaryAccentLight,
  color: Colors.TextPrimary,
  padding: "20px",
  border: `1px solid ${Colors.BorderPrimary}`,
  borderRadius: "5px",
  boxShadow: `0 2px 10px ${Colors.ShadowLight}`,
  zIndex: "1000",
}));
