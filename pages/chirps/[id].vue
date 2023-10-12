<template>
  <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
      <form method="POST" action="">
          <textarea
              name="message"
              class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          >{{ chirps.message }}</textarea>
          <div class="mt-4 space-x-2">
              <button type="button" class="btn primar" @click="saveChirps()">SAVE</button>
              <NuxtLink to="/chirps" class="font-bold">Go Chirps</NuxtLink>
          </div>
      </form>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url = 'http://localhost:3001/chirps/' + id;

//fetch data
const { data: chirps } = await useFetch(url, { key: id });

function saveChirps(){
  useFetch('http://localhost:3001/chirps/' + id, {
    method: 'PATCH',
    body: {
      chirps: {
        message: chirps.message,
      },
    },
  });
}
</script>

<style>

</style>
