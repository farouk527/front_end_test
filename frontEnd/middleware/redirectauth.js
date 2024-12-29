export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
      const token = localStorage.getItem('auth_token');
      
      if (token && (to.path === '/login' || to.path === '/register')) {
        setTimeout(() => {
          return navigateTo('/home');
        }, 500); 
      }
    }
  });
  