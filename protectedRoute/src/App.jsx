import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthProvider, useAuth } from "./Context/AuthContext";
import Settings from "./Components/Settings";
import Profile from "./Components/Profile";
import AuthLayout from "./Layout/AuthLayout";
import MainLayout from "./Layout/MainLayout";

const routeConfig = [
  { path: "/", element: <Home />, isProtected: false, layout: null },
  {
    path: "/login",
    element: <Login />,
    isProtected: false,
    layout: AuthLayout,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    isProtected: true,
    layout: MainLayout,
  },
  {
    path: "/settings",
    element: <Settings />,
    isProtected: true,
    layout: MainLayout,
  },
  {
    path: "/profile",
    element: <Profile />,
    isProtected: true,
    layout: MainLayout,
  },
];

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {routeConfig.map(({ path, element, isProtected, layout: Layout }) => (
        <Route
          key={path}
          path={path}
          element={
            isProtected ? (
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                {Layout ? <Layout>{element}</Layout> : element}
              </ProtectedRoute>
            ) : Layout ? (
              <Layout>{element}</Layout>
            ) : (
              element
            )
          }
        />
      ))}
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
