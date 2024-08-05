import { useState } from "react";
import {
  BasicInfoContainer,
  ButtonContainer,
  Card,
  Description,
  DescriptionWebsiteContainer,
  EditPatientInfoButton,
  ImageDescriptionContainer,
  MoreDetailsButton,
  MoreInfoContainer,
  PatientImage,
  PatientName,
  WebsiteLink,
} from "./styles";
import { PatientCardProps } from "./types";

const PatientCard = ({ patient, onEdit }: PatientCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <BasicInfoContainer>
        <PatientName>{patient.name}</PatientName>
        <MoreDetailsButton
          $isExpanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "-" : "+"}
        </MoreDetailsButton>
      </BasicInfoContainer>
      {expanded && (
        <MoreInfoContainer>
          <ImageDescriptionContainer>
            <PatientImage src={patient.avatar} />
            <DescriptionWebsiteContainer>
              <Description>{patient.description}</Description>
              <WebsiteLink href={patient.website}>Website</WebsiteLink>
            </DescriptionWebsiteContainer>
          </ImageDescriptionContainer>
          <ButtonContainer>
            <EditPatientInfoButton onClick={() => onEdit(patient)}>
              Edit
            </EditPatientInfoButton>
          </ButtonContainer>
        </MoreInfoContainer>
      )}
    </Card>
  );
};

export default PatientCard;
