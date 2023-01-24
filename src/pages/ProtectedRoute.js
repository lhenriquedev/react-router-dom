import React from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children, user }) {
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}
