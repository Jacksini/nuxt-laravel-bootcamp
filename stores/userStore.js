import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
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
        body: {
          username: email,
          password: password,
          grant_type: "password",
          client_id: this.clientId,
          client_secret: this.clientSecret,
        },
      });
      console.log(data);
    },
  },
});
