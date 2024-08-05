import styled from "styled-components";
import { Colors } from "../../constants/colors";
// import Button from "../Button/Button"; todo not able to make work the overriding
import { StyledButton } from "../Button/styles";

export const Card = styled("div")<{}>(() => ({
  padding: "20px",
  backgroundColor: Colors.PrimaryAccentLight,
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

export const BasicInfoContainer = styled("div")<{}>(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const PatientName = styled("h3")<{}>(() => ({
  color: Colors.TextPrimary,
  margin: 0,
}));

export const MoreDetailsButton = styled(StyledButton)<{ $isExpanded: boolean }>(
  ({ $isExpanded }) => ({
    width: "40px",
    height: "40px",
    background: Colors.BackgroundLight,
    color: $isExpanded ? Colors.Error : Colors.TextSecondary,
    fontSize: "16px",
    fontWeight: "800",

    "&:hover": {
      background: Colors.Surface,
    },
  })
);

export const MoreInfoContainer = styled("div")<{}>(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "20px",
}));

export const ImageDescriptionContainer = styled("div")<{}>(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: "20px",
}));

export const PatientImage = styled("img")<{}>(() => ({
  borderRadius: "50%",
  width: "40px",
  height: "40px",
}));

export const DescriptionWebsiteContainer = styled("div")<{}>(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "20px",
}));

export const Description = styled("p")<{}>(() => ({
  fontSize: "14px",
  lineHeight: "18px",
  fontFamily: "Tahoma, sans-serif",
  padding: 0,
  margin: 0,
}));

export const WebsiteLink = styled("a")<{}>(() => ({
  fontSize: "14px",
  lineHeight: "18px",
  fontFamily: "Tahoma, sans-serif",
}));

export const EditPatientInfoButton = styled(StyledButton)<{}>(() => ({
  width: "100px",
}));
