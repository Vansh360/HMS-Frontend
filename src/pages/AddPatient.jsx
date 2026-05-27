import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../service/api";
import Sidebar from "../components/Sidebar";

function AddPatient() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", age: "", disease: "", gender: "Male" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await API.post("/patients", form);
      setSuccess("Patient added successfully!");
      setTimeout(() => navigate("/patients"), 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add patient.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <div className="page-header">
          <h1>Add Patient</h1>
          <p>Register a new patient into the system</p>
        </div>

        <div className="form-card">
          {error && <div className="alert alert-error">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Patient's full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  name="age"
                  className="form-input"
                  placeholder="Age in years"
                  value={form.age}
                  onChange={handleChange}
                  min="0"
                  max="150"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  className="form-input form-select"
                  value={form.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Disease / Condition</label>
                <input
                  type="text"
                  name="disease"
                  className="form-input"
                  placeholder="Diagnosis or condition"
                  value={form.disease}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{ marginTop: 8 }}
            >
              {loading ? "Adding patient…" : "Add Patient"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddPatient;