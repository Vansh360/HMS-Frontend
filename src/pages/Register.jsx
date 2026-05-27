import { useState } from "react";
import API from "../service/api";

function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "PATIENT",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("Registration Successful");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Register
        </h1>

        {/* Username Input */}
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setForm({
              ...form,
              username: e.target.value,
            })
          }
          required
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          required
        />

        {/* Role Selection Dropdown */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Register As:
          </label>
          <select
            value={form.role}
            className="w-full border p-3 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({
                ...form,
                role: e.target.value,
              })
            }
          >
            <option value="PATIENT">Patient</option>
            <option value="DOCTOR">Doctor</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;