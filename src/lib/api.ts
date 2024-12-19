import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api';

export const api = {
  async getTasks() {
    const response = await axios.get(`${API_BASE_URL}/tasks`);
    console.log(response.data);
    return response.data;
  },

  async createTask(data: { title: string; color: string }) {
    const response = await axios.post(`${API_BASE_URL}/tasks`, {
      ...data,
      completed: false
    });
    return response.data;
  },

  async updateTask(id: string, data: Partial<{ title: string; color: string; completed: boolean }>) {
    const response = await axios.put(`${API_BASE_URL}/tasks/${id}`, data);
    return response.data;
  },

  async deleteTask(id: string) {
    await axios.delete(`${API_BASE_URL}/tasks/${id}`);
  },

  async getTask(id: string) {
    const response = await axios.get(`${API_BASE_URL}/tasks/${id}`);
    return response.data;
  }
};
