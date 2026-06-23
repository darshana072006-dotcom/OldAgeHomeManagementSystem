import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Residents from "../pages/Residents";
import AddResident from "../pages/AddResident";
import EditResident from "../pages/EditResident";
import HealthRecords from "../pages/HealthRecords";
import MedicalHistory from "../pages/MedicalHistory";
import Medicines from "../pages/Medicines";
import Appointment from "../pages/appointment";
import Staff from "../pages/staff";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/residents" element={<Residents />} />

        <Route path="/add-resident" element={<AddResident />} />

        <Route path="/edit-resident/:id" element={<EditResident />} />

        <Route path="/health-records" element={<HealthRecords />} />

        <Route path="/medical-history" element={<MedicalHistory />} />

        <Route path="/medicines" element={<Medicines />} />

        <Route path="/appointments" element={<Appointment />} />

        <Route path="/staff" element={<Staff />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;