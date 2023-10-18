import { defineStore } from 'pinia'

export const useAccessTokenStoreStore = defineStore('Token', {
  state: () => ({
    accessToken: localStorage.getItem('accessToken') || null,
   }),
   actions: {
    setAccessToken(token) {
      // Almacena el accessToken en el estado de Pinia
      this.accessToken = token;

      // Almacena el accessToken en el localStorage
      localStorage.setItem('accessToken', token);
    },
    clearAccessToken() {
      // Borra el accessToken en el estado de Pinia
      this.accessToken = null;

      // Borra el accessToken en el localStorage
      localStorage.removeItem('accessToken');
    },
  },
})
