export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        setTimeout(() => {
          navigateTo('/login');
        }, 100); 
      }
    }
  });
  

  