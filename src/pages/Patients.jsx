import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../service/api";
import Sidebar from "../components/Sidebar";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await API.get("/patients");
      setPatients(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load patients.");
    } finally {
      setLoading(false);
    }
  };

  const filtered = patients.filter((p) =>
    p.name?.toLowerCase().includes(search.toLowerCase()) ||
    p.disease?.toLowerCase().includes(search.toLowerCase())
  );

  const initials = (name = "") =>
    name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <div className="page-header">
          <h1>Patients</h1>
          <p>{patients.length} patient{patients.length !== 1 ? "s" : ""} registered in the system</p>
        </div>

        <div className="patients-toolbar">
          <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search by name or disease…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Link to="/add-patient" className="btn-add">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:15,height:15}}>
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Add Patient
          </Link>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        {loading ? (
          <div className="spinner-wrap"><div className="spinner" /></div>
        ) : filtered.length === 0 ? (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <p>{search ? "No patients match your search." : "No patients found in the system."}</p>
          </div>
        ) : (
          <div className="patients-grid">
            {filtered.map((patient, i) => (
              <div className="patient-card" key={patient._id || patient.id} style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="patient-avatar">{initials(patient.name)}</div>
                <div className="patient-name">{patient.name}</div>
                <div className="patient-detail">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Age: {patient.age}
                </div>
                <div className="disease-badge">{patient.disease}</div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Patients;