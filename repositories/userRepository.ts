import axios from "axios";
import { User } from "../interfaces";

const API_URL = "http://localhost:3001";

export const getUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>(`${API_URL}/users`);
    return response.data;
};

export const getUserById = async (id: number): Promise<User> => {
    const response = await axios.get<User>(`${API_URL}/users/${id}`);
    return response.data;
};

export const createUser = async (user: User): Promise<User> => {
    const response = await axios.post<User>(`${API_URL}/users`, user);
    return response.data;
};

export const updateUser = async (id: number, user: User): Promise<User> => {
    const response = await axios.put<User>(`${API_URL}/users/${id}`, user);
    return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/users/${id}`);
};