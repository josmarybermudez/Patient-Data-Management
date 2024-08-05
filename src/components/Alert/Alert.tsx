import { AlertContainer } from "./styles";
import { AlertProps } from "./types";

const Alert = ({ message, onClose }: AlertProps) => {
  return (
    <AlertContainer>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </AlertContainer>
  );
};

export default Alert;
