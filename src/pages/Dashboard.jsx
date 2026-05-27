import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <div className="page-header">
          <h1>Dashboard</h1>
          <p>Welcome back — here's what's happening today.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon teal">🧑‍⚕️</div>
            <div className="stat-value">—</div>
            <div className="stat-label">Total Patients</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon blue">👨‍⚕️</div>
            <div className="stat-value">—</div>
            <div className="stat-label">Doctors On Duty</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon amber">📋</div>
            <div className="stat-value">—</div>
            <div className="stat-label">Admissions Today</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon red">🚑</div>
            <div className="stat-value">—</div>
            <div className="stat-label">Critical Cases</div>
          </div>
        </div>

        <div className="action-grid">
          <Link to="/patients" className="action-card">
            <div className="action-card-icon">👥</div>
            <h3>View Patients</h3>
            <p>Browse and manage all registered patients in the system.</p>
            <span className="action-arrow">→</span>
          </Link>

          <Link to="/add-patient" className="action-card">
            <div className="action-card-icon">➕</div>
            <h3>Add Patient</h3>
            <p>Register a new patient and add their medical details.</p>
            <span className="action-arrow">→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;