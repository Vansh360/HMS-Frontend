import { useEffect, useState } from "react";
import API from "../service/api";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true); // Track initial fetch loading

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await API.get("/patients");
      setPatients(response.data);
    } catch (error) {
      alert(error.response?.data?.message || "Unauthorized to view patients");
    } finally {
      setLoading(false); // Stop loading regardless of success/failure
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Patients List</h1>

      {loading ? (
        /* 1. Loading State */
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : patients.length === 0 ? (
        /* 2. Empty State */
        <div className="bg-white p-8 rounded-xl shadow text-center text-gray-500">
          No patients found in the system.
        </div>
      ) : (
        /* 3. Data Grid State */
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {patients.map((patient) => (
            <div
              key={patient._id || patient.id} // Accommodates both SQL (id) and MongoDB (_id)
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {patient.name}
              </h2>
              <div className="text-gray-600 space-y-1">
                <p>
                  <span className="font-medium text-gray-500">Age:</span> {patient.age}
                </p>
                <p>
                  <span className="font-medium text-gray-500">Disease:</span>{" "}
                  <span className="capitalize">{patient.disease}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Patients;