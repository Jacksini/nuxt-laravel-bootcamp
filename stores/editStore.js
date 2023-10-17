import { defineStore } from "pinia";

export const useEditStore = defineStore("edit", {
  state: () => ({
    chirp: [],
  }),
  actions: {
    async editChirp(chirp) {
      try {
        const data = await $fetch(`http://lav.test/api/chirps/${chirp}/edit`, {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMWRiNDIzOWZlZjNkYWUyMGZlNTNkMTYwN2MyYjM3ODMzOWNlNjIzYTU1ZDk3NWI0ZGRlNDRiNjQ2MWZmYmIzODk1NmY1NTEwNWE3YTBiNzciLCJpYXQiOjE2OTcyMjcwMjguNzUzODk0LCJuYmYiOjE2OTcyMjcwMjguNzUzOSwiZXhwIjoxNzI4ODQ5NDI4LjczMzM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.KuAILCrIofFWwtNXp8148lFQnZlK91cqAP2QG2o-DfFKG8QsEe7uSLKeOYVl9eqBeZUAqvLf5QRq2J4hl-j9zcXopNtti0IbaDPcoA0Rk0vbTJdFvYd0ctqFiIoaflvnC99LAUZESOUs06aQI-ZZ97oCQz98Hh-HEkhQPJTYnNhHqc4lS6yI4rvR6zSDLypJ23OOeChg-34COm_U57SCvme43d-IQFhTyu7_Av3FKFjFtgVdyWIzt9INTGEkzMHLmP8V1CcAgn6IS5VHKhqQRsFjhzoWdc86mBFoGkZCeeGR4RvJYliv49nj47vh51JGrJPyRKShOK8O7kUEGBcCJ-9KvWtcDQks1MDebE0hpsnTs-FnX-4P6uOXLePHZIoeTm9wANHQxVzaPfXY96_E4uq-TcUtBkpP-rh8gBKlgSMMnjaAsBIj0SLmNJ29B3m5yU9_AudPDGnbI8acWNMvXoVoB3bkSuJHP-HQDk6hBGkefZYf81LBw00QcTBzFPZAoiUo6A8tqKYodCwdgcRKEQSNUVtwrtPzsnmgae0vTzrvWhtCrJ_A3GNieQ8goyQpUrRY0TZw8pgSrt1w3xzJAO5LS18g8ioXrih-4_M5Dg6ZRzMZgOWc3T8FAg6xEab1vUTNOtDGyXP4aHOsC-_q7WQiwTkpOYkKJ0OxMmGwRRU",
            Accept: "application/json",
          },
        });
        this.chirp = data.chirp; // Asigna los datos de la API a this.chirps
      } catch (error) {
        console.error("Error al obtener los chirps:", error);
      }
    },
    async updateChirp(chirp) {
      await $fetch(`http://lav.test/api/chirps/${chirp.id}`, {
        method: "PATCH",
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMWRiNDIzOWZlZjNkYWUyMGZlNTNkMTYwN2MyYjM3ODMzOWNlNjIzYTU1ZDk3NWI0ZGRlNDRiNjQ2MWZmYmIzODk1NmY1NTEwNWE3YTBiNzciLCJpYXQiOjE2OTcyMjcwMjguNzUzODk0LCJuYmYiOjE2OTcyMjcwMjguNzUzOSwiZXhwIjoxNzI4ODQ5NDI4LjczMzM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.KuAILCrIofFWwtNXp8148lFQnZlK91cqAP2QG2o-DfFKG8QsEe7uSLKeOYVl9eqBeZUAqvLf5QRq2J4hl-j9zcXopNtti0IbaDPcoA0Rk0vbTJdFvYd0ctqFiIoaflvnC99LAUZESOUs06aQI-ZZ97oCQz98Hh-HEkhQPJTYnNhHqc4lS6yI4rvR6zSDLypJ23OOeChg-34COm_U57SCvme43d-IQFhTyu7_Av3FKFjFtgVdyWIzt9INTGEkzMHLmP8V1CcAgn6IS5VHKhqQRsFjhzoWdc86mBFoGkZCeeGR4RvJYliv49nj47vh51JGrJPyRKShOK8O7kUEGBcCJ-9KvWtcDQks1MDebE0hpsnTs-FnX-4P6uOXLePHZIoeTm9wANHQxVzaPfXY96_E4uq-TcUtBkpP-rh8gBKlgSMMnjaAsBIj0SLmNJ29B3m5yU9_AudPDGnbI8acWNMvXoVoB3bkSuJHP-HQDk6hBGkefZYf81LBw00QcTBzFPZAoiUo6A8tqKYodCwdgcRKEQSNUVtwrtPzsnmgae0vTzrvWhtCrJ_A3GNieQ8goyQpUrRY0TZw8pgSrt1w3xzJAO5LS18g8ioXrih-4_M5Dg6ZRzMZgOWc3T8FAg6xEab1vUTNOtDGyXP4aHOsC-_q7WQiwTkpOYkKJ0OxMmGwRRU",
          Accept: "application/json",
        },
        body: {
          message: chirp.message,
        },
      });
    },
  },
});
