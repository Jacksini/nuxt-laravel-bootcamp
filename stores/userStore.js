import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    isLoggedIn: false,
  }),
  getters: {
    IsLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
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
          'Authorization': `Bearer ${accessToken}`,
          'Accept': "application/json",
        },  
      });
      return user;
    },
    async login(username, password) {
      const response = await $fetch("/api/callToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          username: username,
          password: password,
        },
      });
      localStorage.setItem('accessToken', response.access_token);
      this.isLoggedIn = true;
      return response;
    },
  },
});
