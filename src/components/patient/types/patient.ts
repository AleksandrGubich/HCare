export type InfoItem = {
  label: string;
  value: string;
};

export type Patient = {
  id: number;
  fullName: string;
  photo: string;
  contactInfo: InfoItem[];
  personalInfo: InfoItem[];
};

export type DummyJsonPatient = {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
  birthDate: string;
  age: number;
  address: {
    address: string;
    city: string;
    state: string;
    country: string;
  };
};
