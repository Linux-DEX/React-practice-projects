import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Axios from "./pages/Axios";
import Fetch from "./pages/Fetch";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/axios", element: <Axios /> },
      { path: "/fetch", element: <Fetch /> },
    ],
  },
  { path: "*", element: <h1>Page Not found</h1> },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_normalizeFormMethod: true,
  },
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
