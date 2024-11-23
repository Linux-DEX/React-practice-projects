import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const UsersPage = React.lazy(() => import("../components/UsersPage"));
const AddUserPage = React.lazy(() => import("../components/AddUserPage"));

const Lazy = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/add-user" element={<AddUserPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Lazy;
