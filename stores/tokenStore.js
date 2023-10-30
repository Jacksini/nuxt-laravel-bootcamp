import { defineStore } from "pinia";

export const useTokenStore = defineStore('token', {
    state: () => ({
        chirps: [],
    }),
    actions: {
        async makeRequest(uri, method, body) {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const data = await $fetch(uri, {
                    method: method,
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Accept': 'application/json'
                    },
                    body: body
                });
                return data;
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
                return null;
            }   
        },
        async getChirps(page, perPage) {
            try {
                const data = await this.makeRequest('http://lav.test/api/chirps/?page=' + page + "&perPage=" + perPage, 'GET', null);
                this.chirps = data.chirps;
            } catch (error) {
                console.error('Error al obtener los chirps:', error);
            }
        },
        async deleteChirps(chirp) { 
            await this.makeRequest('http://lav.test/api/chirps/' + chirp.id, 'DELETE', null);
            await this.getChirps(localStorage.getItem('actualPage'),localStorage.getItem('perPage'));
        },
        async createChirp(chirp) {
            await this.makeRequest('http://lav.test/api/chirps', 'POST', {
                message: chirp
            });
            await this.getChirps(localStorage.getItem('actualPage'),localStorage.getItem('perPage'));
        },
    }   
});
