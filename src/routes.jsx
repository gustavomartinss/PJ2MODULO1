import * as React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PropTypes from "prop-types"

import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Register } from "./pages/Register";
import { EditProfile } from "./pages/EditProfile";
import { Dashboard } from "./pages/Dashboard";
import { Devices } from "./pages/Devices";

import { useAuth } from "./contexts/AuthContext";

const AppRoutes = () => {
  const Loading = () => <p>Carregando ...</p>;

  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/devices"
          element={
            <ProtectedRoute>
              <Devices />
            </ProtectedRoute>
          }
        />
      </Routes>
    </React.Suspense>
  );
};
export default AppRoutes;

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};