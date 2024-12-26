import axios from 'axios';

export default class AuthService {
  constructor() {
    this.apiUrl = 'http://localhost:8000/api';
    this.axiosInstance = axios.create({
      baseURL: this.apiUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async login(email, password) {
    try {
      const response = await this.axiosInstance.post('/auth/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('auth_token', response.data.token);
        console.log(localStorage.getItem('auth_token'));

      }
      return response.data;
    } catch (error) {
      console.error('Erreur de connexion:', error);
      throw new Error('Erreur de connexion: ' + error.response?.data?.message || error.message);
    }
  }

  logout() {
    localStorage.removeItem('auth_token');
    console.log(localStorage.getItem('auth_token'));
  }

  
}
