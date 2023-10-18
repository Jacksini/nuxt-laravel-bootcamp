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
      const data = await $fetch("http://lav.test/oauth/token", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: {
          username: email,
          password: password,
          grant_type: "password",
          client_id: process.env.VUE_APP_CLIENT_ID,
          client_secret: process.env.VUE_APP_CLIENT_SECRET,
        },
      });
      console.log(data);
    },
  },
});
