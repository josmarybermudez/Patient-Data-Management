export type PatientData = {
  createdAt: string;
  name: string;
  avatar: string;
  description: string;
  website: string;
  id: string;
};

export interface PatientCardProps {
  patient: PatientData;
  onEdit: (patient: any) => void;
}
