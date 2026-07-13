export type MedicalStaffStatus = "Confirmed" | "Cancelled";

export type MedicalStaffMember = {
  id: number;
  name: string;
  clinic: string;
  position: string;
  cityCountry: string;
  availableHours: string;
  status: MedicalStaffStatus;
  photo: string;
};

export type DummyJsonUser = {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  company: {
    name: string;
    title: string;
  };
  address: {
    city: string;
    country: string;
  };
};

export type DummyJsonUserResponse = {
  users: DummyJsonUser[];
};
