import axios from "axios";

const patientApi = axios.create({

  baseURL: "http://localhost:8081",
});

patientApi.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {

    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});

export default patientApi;