import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
  }),
  actions: {
    async createUser(name, email, password) {
      const register = await $fetch("http://lav.test/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: {
          name: name,
          email: email,
          password: password,
        },
      });
      console.log(register);
    },
    async loginUser(email, password) {
      const token = 'MtkAaahrWt6Mop8U6CXtQWjgNa9iXDvWGcYl6GSa';
      const data = await $fetch("http://lav.test/oauth/token", {
        method: "POST",
        body: {
          username: email,
          password: password,
          grant_type: "password",
          client_id: "2",
          client_secret: token,
        },
      });
      console.log(data);
    },
  },
});
