import { defineStore } from "pinia";

export const useUserStore = defineStore('token', {
  state: () => ({
    users: [],
  }),
  actions: {
    async createUser(name, email, password) {
      const data = {
        name: name,
        email: email,
        password: password,
      };

      console.log("User data sent:", data);

      await $fetch("http://lav.test/api/register", {
        method: 'POST',   
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // Cambiado 'Accept' a 'Content-Type'
        },
        body: JSON.stringify(data), // Convertir el objeto JavaScript a JSON
      });

      console.log("User data sent:", data);
    }
  },
});
