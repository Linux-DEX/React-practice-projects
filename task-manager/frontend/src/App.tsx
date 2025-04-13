import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/tasks" />} />
    </Routes>
  );
}

export default App;
