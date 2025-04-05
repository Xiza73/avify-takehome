import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../app/dashboard/pages/dashboard";

export const Route = createFileRoute("/")({
  component: Dashboard,
});
