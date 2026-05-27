import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import AddPatient from "./pages/AddPatient";
 import ProtectedRoute from "./components/ProtectedRoute"; // Import the wrapper

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* General Protected Routes (Any logged-in user can access) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Medical Staff Only Routes (Doctors & Admins) */}
        <Route element={<ProtectedRoute allowedRoles={["DOCTOR", "ADMIN"]} />}>
          <Route path="/patients" element={<Patients />} />
          <Route path="/add-patient" element={<AddPatient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;