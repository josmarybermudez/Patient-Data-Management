import React, { useState, useEffect } from "react";
import { getPatients } from "./api";
import PatientCard from "./components/PatientCard/PatientCard";
// import PatientModal from "./PatientModal";

const App: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPatient, setSelectedPatient] = useState<any | null>(null);

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
    // if (patient.id) {
    //   await updatePatient(patient.id, patient);
    // } else {
    //   await addPatient(patient);
    // }
    setSelectedPatient(null);
    setLoading(true);
    const data = await getPatients();
    setPatients(data);
    setLoading(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Patient Management</h1>
      <button onClick={() => setSelectedPatient({})}>Add Patient</button>
      <div className="patient-list">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} onEdit={handleEdit} />
        ))}
      </div>
      {/* {selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onSave={handleSave}
          onClose={() => setSelectedPatient(null)}
        />
      )} */}
    </div>
  );
};

export default App;
