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

const routeConfig = [
  { path: "/", element: <Home />, isProtected: false },
  { path: "/login", element: <Login />, isProtected: false },
  { path: "/dashboard", element: <Dashboard />, isProtected: true },
  { path: "/settings", element: <Settings />, isProtected: true },
  { path: "/profile", element: <Profile />, isProtected: true },
];

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {routeConfig.map(({ path, element, isProtected }) => (
        <Route
          key={path}
          path={path}
          element={
            isProtected ? (
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                {element}
              </ProtectedRoute>
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
