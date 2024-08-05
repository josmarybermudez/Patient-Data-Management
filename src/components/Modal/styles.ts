import styled from "styled-components";
import { Colors } from "../../constants/colors";
import { StyledButton } from "../Button/styles";

export const ModalBackground = styled("div")<{}>(() => ({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: Colors.ShadowDark,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ModalContent = styled("div")<{}>(() => ({
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "500px",
  maxWidth: "80%",
}));

export const ButtonContainer = styled("div")<{}>(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
}));

export const CloseButton = styled(StyledButton)<{}>(() => ({
  width: "35px",
  height: "35px",
  fontWeight: 900,
}));
