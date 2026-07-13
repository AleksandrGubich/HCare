import { useQuery } from "@tanstack/react-query";
import { getPatient } from "../api/patientApi";

export const usePatient = () => {
  return useQuery({
    queryKey: ["patient"],
    queryFn: getPatient,
  });
};
