import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ allowedRoles }) {
  const token = localStorage.getItem("token");
if (!token) {
  return <Navigate to="/" replace />;
}

  // Role-based check
  if (allowedRoles && allowedRoles.length > 0) {
    try {
      // Decode the JWT payload (middle part) without a library
      const payload = JSON.parse(atob(token.split(".")[1]));
      const userRole = payload.role;

      if (!allowedRoles.includes(userRole)) {
        // Logged in but wrong role — redirect to dashboard
        return <Navigate to="/dashboard" replace />;
      }
    } catch {
      // Token is malformed — send back to login
      localStorage.removeItem("token");
      return <Navigate to="/" replace />;
    }
  }

  // All checks passed — render the child route
  return <Outlet />;
}

export default ProtectedRoute;