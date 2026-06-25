import { createFileRoute } from "@tanstack/react-router";
import { Feedback } from "../pages/Feedback/Feedback";

export const Route = createFileRoute("/feedback")({
  component: Feedback,
});
