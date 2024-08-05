import styled from "styled-components";
import { Colors } from "../../constants/colors";
import { StyledButton } from "../../components/Button/styles";

export const Container = styled("div")<{}>(() => ({
  backgroundColor: Colors.BackgroundLight,
  boxSizing: "border-box",
  padding: "40px",
}));

export const Title = styled("h1")<{}>(() => ({
  font: "600 30px/36px Tahoma, sans-serif",
  color: Colors.PrimaryAccentDark,
  margin: 0,
  paddingBottom: "20px",
}));

export const Description = styled("p")<{}>(() => ({
  font: "400 18px/22px Tahoma, sans-serif",
  color: Colors.TextPrimary,
  margin: 0,
}));

const getFontColorVariant = (variant: string) => {
  switch (variant) {
    case "primary":
      return Colors.TextPrimary;
    case "accent":
      return Colors.PrimaryAccentDark;
    default:
      return Colors.TextPrimary;
  }
};

export const SubTitle = styled("h2")<{ $variant?: string }>(({ $variant }) => ({
  font: "600 20px/24px Tahoma, sans-serif",
  color: getFontColorVariant($variant || "primary"),
  margin: 0,

  "& span": {
    color: Colors.TextAlternative,
    fontWeight: 600,
  },
}));

export const ListHeader = styled("div")<{}>(() => ({
  padding: "30px 0 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const PatientsCardsContainer = styled("section")<{}>(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "15px 0 30px",
}));

export const NewPatientButton = styled(StyledButton)<{}>(() => ({}));
