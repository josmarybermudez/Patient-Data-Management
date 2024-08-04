import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

// todo when import this i'm not able to override styles
const Button = ({ children, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
