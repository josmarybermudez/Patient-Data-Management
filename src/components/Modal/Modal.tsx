import {
  ButtonContainer,
  CloseButton,
  ModalBackground,
  ModalContent,
} from "./styles";
import { ModalProps } from "./types";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ButtonContainer>
          <CloseButton onClick={onClose} $variant="light">
            X
          </CloseButton>
        </ButtonContainer>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
