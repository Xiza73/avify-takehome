import React from "react";
import { env } from "./config/env.config";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
import Loader from "./components/Loader";

export const AppRouter = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof AppRouter;
  }
}

export const App: React.FC = () => {
  return (
    <>
      <Loader />
      <RouterProvider router={AppRouter} />
    </>
  );
};
