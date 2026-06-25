import { createFileRoute } from "@tanstack/react-router";
import { MedicalStaff } from "../pages/MedicalStaff/MedicalStaff";

export const Route = createFileRoute("/medical-staff")({
  component: MedicalStaff,
});
