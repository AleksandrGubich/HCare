import type {
  DummyJsonUserResponse,
  MedicalStaffMember,
} from "../types/medicalStaff";

const USERS_LIMIT = 10;
const MEDICAL_STAFF_API_URL = `https://dummyjson.com/users?limit=${USERS_LIMIT}`;

export const getMedicalStaff = async (): Promise<MedicalStaffMember[]> => {
  const response = await fetch(MEDICAL_STAFF_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch medical staff");
  }

  const data: DummyJsonUserResponse = await response.json();

  return data.users.map((user) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    clinic: user.company.name,
    position: user.company.title,
    cityCountry: `${user.address.city}, ${user.address.country}`,
    availableHours: "15:00 - 22:00",
    status: "Confirmed",
    photo: user.image,
  }));
};
