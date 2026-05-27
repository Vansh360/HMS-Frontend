import { useState } from "react";

import patientApi from "../service/patientApi";

function AddPatient() {

  const [form, setForm] = useState({
    name: "",
    age: "",
    disease: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

    await patientApi.post(
  "/patients",
  form
);

      alert("Patient added successfully");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to add patient"
      );
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >

        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Add Patient
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          className="w-full border p-3 rounded mb-4"
          required
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

        <input
          type="number"
          placeholder="Age"
          value={form.age}
          className="w-full border p-3 rounded mb-4"
          required
          onChange={(e) =>
            setForm({
              ...form,
              age: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Disease"
          value={form.disease}
          className="w-full border p-3 rounded mb-4"
          required
          onChange={(e) =>
            setForm({
              ...form,
              disease: e.target.value
            })
          }
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded font-semibold hover:bg-green-700"
        >
          Add Patient
        </button>

      </form>

    </div>
  );
}

export default AddPatient;