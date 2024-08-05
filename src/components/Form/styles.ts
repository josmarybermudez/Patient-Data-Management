import styled from "styled-components";
import { Colors } from "../../constants/colors";
import { StyledButton } from "../Button/styles";

export const InputContainer = styled("div")<{}>(() => ({
  padding: "10px 0",
  display: "flex",
  flexDirection: "column",
  gap: "5px",

  "& > input": {
    borderRadius: "4px",
    minHeight: "25px",
    border: `1px solid ${Colors.BorderPrimary}`,
  },

  "& > textarea": {
    borderRadius: "4px",
    minHeight: "50px",
    border: `1px solid ${Colors.BorderPrimary}`,
  },
}));

export const Label = styled("label")<{}>(() => ({
  color: Colors.TextPrimary,
}));

export const ButtonContainer = styled("div")<{}>(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
}));

export const SubmitButton = styled(StyledButton)<{}>(() => ({}));

export const ErrorText = styled("div")<{}>(() => ({
  color: Colors.Error,
  fontSize: "12px",
}));
