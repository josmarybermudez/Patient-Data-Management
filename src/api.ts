import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://63bedcf7f5cfc0949b634fc8.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPatients = async () => {
  const response = await apiClient.get("/users");
  return response.data;
};
