import axios from "axios";
import { Task } from "../types";

const API_URL = "http://localhost:3000";

export const loginUser = async (username: string): Promise<string> => {
  const res = await axios.post(`${API_URL}/login`, { username });
  return res.data.token;
};

export const getTasks = async (): Promise<Task[]> => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${API_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const addTask = async (title: string) => {
  const token = localStorage.getItem("token");
  await axios.post(
    `${API_URL}/tasks`,
    { title },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const completeTask = async (id: string) => {
  const token = localStorage.getItem("token");
  await axios.patch(
    `${API_URL}/tasks/${id}`,
    { completed: true },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const deleteTask = async (id: string) => {
  const token = localStorage.getItem("token");
  await axios.delete(`${API_URL}/tasks/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

