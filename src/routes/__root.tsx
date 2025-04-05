import React from "react";

import { createRootRoute, Navigate, Outlet } from "@tanstack/react-router";

const AppRoute: React.FC = () => {
  return <Outlet />;
};

export const Route = createRootRoute({
  component: AppRoute,
  errorComponent: ({ error }) => {
    return <div> 400 - {error.message}</div>;
  },
  notFoundComponent: () => <Navigate to="/" />,
});
