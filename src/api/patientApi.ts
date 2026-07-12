import type { DummyJsonPatient, Patient } from "../types/patient";

const USER_NUMBER = 1;
const PATIENT_API_URL = `https://dummyjson.com/users/${USER_NUMBER}`;

export const getPatient = async (): Promise<Patient> => {
  const response = await fetch(PATIENT_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch patient");
  }

  const patient: DummyJsonPatient = await response.json();

  return {
    id: patient.id,
    fullName: `${patient.firstName} ${patient.lastName}`,
    photo: patient.image,
    contactInfo: [
      {
        label: "Full Name",
        value: `${patient.firstName} ${patient.lastName}`,
      },
      {
        label: "Phone",
        value: `${patient.phone}`,
      },
      {
        label: "Home Phone",
        value: "-",
      },
      {
        label: "Address",
        value: `${patient.address.address}, ${patient.address.city}`,
      },
      {
        label: "Email",
        value: `${patient.email}`,
      },
    ],

    personalInfo: [
      {
        label: "Gender",
        value: patient.gender,
      },
      {
        label: "Birth (Age)",
        value: `${patient.birthDate} (${patient.age})`,
      },
      {
        label: "Patient ID",
        value: String(patient.id),
      },
      {
        label: "Nationality",
        value: patient.address.country,
      },
      {
        label: "Marital status",
        value: "Not specified",
      },
      {
        label: "Emergency contact",
        value: "-",
      },
    ],
  };
};
