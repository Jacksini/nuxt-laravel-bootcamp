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
    },
    async requestUser() {
      const accessToken = localStorage.getItem('accessToken');
      const user = await $fetch("http://lav.test/api/request", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      });
      return user;
    }
  },
});
