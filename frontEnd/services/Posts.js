import axios from 'axios';

export default class PostService {
  constructor() {
    this.apiUrl = 'http://localhost:8000/api';
    this.axiosInstance = axios.create({
      baseURL: this.apiUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async CreatePost(formData, token) {
    try {
      const response = await this.axiosInstance.post(
        '/post/createPost',
        {
          title: formData.title,
          description: formData.description,
          category: formData.category,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Erreur de création:', error); 
      throw new Error('Erreur de création: ' + (error.response?.data?.message || error.message));
    }
  }

  async getAllPosts(token) {
    try {
      const response = await this.axiosInstance.get(
        '/post/getposts',
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
      return response;
    } catch (error) {
      console.error('Erreur de création:', error); 
      throw new Error('Erreur de création: ' + (error.response?.data?.message || error.message));
    }
  }
  
 
}
