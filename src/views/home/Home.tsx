import React, { useState, useEffect } from "react";
import { getPatients } from "../../api";
import {
  Container,
  PatientsCardsContainer,
  SubTitle,
  Title,
  Description,
  ListHeader,
  NewPatientButton,
} from "./styles";
import { Modal } from "../../components/Modal";
import PatientForm from "../../components/Form/Form";
import { FormValues } from "../../components/Form";
import { Alert } from "../../components/Alert";
import { PatientCard } from "../../components/PatientCard";

const Home: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPatient, setSelectedPatient] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "" });

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getPatients();
        setPatients(data);
      } catch (error) {
        console.log(error); // todo
        setError("error");
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const handleEdit = (patient: any) => {
    setSelectedPatient(patient);
  };

  const handleSave = async (patient: any) => {
    //todo
    setSelectedPatient(null);
    setLoading(true);
    const data = await getPatients();
    setPatients(data);
    setLoading(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const patientsSortedByName = [...patients].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  const createNewPatient = () => {
    openModal();
  };

  const handleSubmit = (values: FormValues) => {
    const formData = {
      ...values,
      createdAt: new Date().toISOString(),
      id: patients.length.toString(), // I could iterate and generate a unique id but lets keep it like this for now
    };

    patients.push(formData);
    closeModal();
    setAlert({ show: true, message: "Patient added successfully!" });
  };

  const closeAlert = () => {
    setAlert({ show: false, message: "" });
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container>
      <Title>Bayhealth Medical Center</Title>
      <Description>Manage patients data.</Description>
      <ListHeader>
        <SubTitle $variant="accent">
          All patiens <span>({patientsSortedByName.length})</span>
        </SubTitle>
        <NewPatientButton onClick={() => createNewPatient()} $variant="dark">
          + Add Patient
        </NewPatientButton>
      </ListHeader>
      <PatientsCardsContainer>
        {patientsSortedByName.map((patient) => (
          <PatientCard key={patient.id} patient={patient} onEdit={handleEdit} />
        ))}
      </PatientsCardsContainer>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubTitle>Patient's information</SubTitle>
        <PatientForm onSubmit={handleSubmit} submitText="Add patient" />
      </Modal>
      {alert.show && <Alert message={alert.message} onClose={closeAlert} />}
    </Container>
  );
};

export default Home;
