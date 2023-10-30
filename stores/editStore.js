import { defineStore } from "pinia";
import { useTokenStore } from '../stores/tokenStore';
const tokenStore = useTokenStore();

export const useEditStore = defineStore("edit", {
  state: () => ({
    chirp: [],
  }),
  actions: {
    async editChirp(chirp) {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const data = await $fetch(`http://lav.test/api/chirps/${chirp}/edit`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        });
        this.chirp = data.chirp;
      } catch (error) {
        console.error("Error al obtener los chirps:", error);
      }
    },
    async updateChirp(chirp) {
      try {
        const accessToken = localStorage.getItem('accessToken');
        await $fetch(`http://lav.test/api/chirps/${chirp.id}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
          body: {
            message: chirp.message,
          },
        });
        await tokenStore.getChirps(localStorage.getItem('actualPage'),localStorage.getItem('perPage'));
      } catch (error) {
        console.error('Error al actualizar el chirp:', error);
      }
    },
  },
});
