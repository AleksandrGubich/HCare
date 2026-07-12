import { useQuery } from "@tanstack/react-query";
import { getMedicalStaff } from "../api/medicalStaffApi";

export const useMedicalStaff = () => {
  return useQuery({
    queryKey: ["medical-staff"],
    queryFn: getMedicalStaff,
  });
};
