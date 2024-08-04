import React, { useState } from "react";
import {
  BasicInfoContainer,
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

const PatientCard: React.FC<{
  patient: any;
  onEdit: (patient: any) => void;
}> = ({ patient, onEdit }) => {
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
          <EditPatientInfoButton onClick={() => onEdit(patient)}>
            Edit
          </EditPatientInfoButton>
        </MoreInfoContainer>
      )}
    </Card>
  );
};

export default PatientCard;
