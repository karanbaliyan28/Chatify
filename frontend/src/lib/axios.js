import axios from "axios";

const DEFAULT_API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000/api"
    : "https://chatify-p18p.onrender.com/api/";

export const API_URL = (import.meta.env.VITE_API_URL || DEFAULT_API_URL).replace(/\/$/, "");

export const SOCKET_URL = (
  import.meta.env.VITE_SOCKET_URL || API_URL.replace(/\/api$/, "")
).replace(/\/$/, "");

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // needed for cookies
});
