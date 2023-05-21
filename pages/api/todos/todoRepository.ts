import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

export const getTodos = async (): Promise<Todo[]> => {
    const response = await axios.get<Todo[]>(`${API_URL}`);
    return response.data;
};

export const getTodoById = async (id: number): Promise<Todo> => {
    const response = await axios.get<Todo>(`${API_URL}/${id}`);
    return response.data;
};

export const createTodo = async (todo: Todo): Promise<Todo> => {
    const response = await axios.post<Todo>(`${API_URL}/create`, todo);
    return response.data;
};

export const updateTodo = async (id: number, todo: Todo): Promise<Todo> => {
    const response = await axios.put<Todo>(`${API_URL}/update/${id}`, todo);
    return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/delete/${id}`);
};