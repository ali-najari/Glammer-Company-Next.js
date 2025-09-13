import axiosClient from "@/lib/axios";

export const createUser = async (user: { username: string; email: string; password: string }) => {
  const res = await axiosClient.post("/auth/register", user);
  return res.data; 
};

export const loginUser = async (email: string, password: string) => {
  const res = await axiosClient.post("/auth/login", { email, password });
  return res.data; 
};
