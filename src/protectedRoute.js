import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("access_token");

  if (!isAuthenticated) {
    // user is not authenticated
    localStorage.clear();
    sessionStorage.clear();
    // window.location.reload();
    return <Navigate to="/" />;
  }
  return children;
};
