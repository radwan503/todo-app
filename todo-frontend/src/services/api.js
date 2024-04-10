// src/services/api.js
const BASE_URL = process.env.REACT_APP_API_URL;

const api = {
  async getTodos() {
    const response = await fetch(`${BASE_URL}/todos`);
    return response.json();
  },

  async addTodo(todo) {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    return response.json();
  },

  async updateTodo(todo) {
    const response = await fetch(`${BASE_URL}/todos/${todo._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    return response.json();
  },

  async deleteTodo(id) {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },
};

export default api;
