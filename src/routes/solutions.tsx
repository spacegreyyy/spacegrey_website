import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions")({
  component: () => <Outlet />,
});
