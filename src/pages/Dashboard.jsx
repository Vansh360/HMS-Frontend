import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-10">
        Hospital Dashboard
      </h1>

      <div className="flex gap-6">
        <Link
          to="/patients"
          className="bg-blue-600 text-white px-6 py-4 rounded-xl"
        >
          View Patients
        </Link>

        <Link
          to="/add-patient"
          className="bg-green-600 text-white px-6 py-4 rounded-xl"
        >
          Add Patient
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;