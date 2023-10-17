<template>
  <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
      <form method="POST" action="">
          <textarea
              name="message"
              v-model="editStore.chirp.message"
              class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          >{{ editStore.chirp.message }}</textarea>
          <div class="mt-4 space-x-2">
              <button type="button" class="btn primar" @click="saveChirps()">SAVE</button>
              <NuxtLink to="/chirps" class="font-bold">Go Chirps</NuxtLink>
          </div>
      </form>
  </div>
</template>

<script setup>
import { useEditStore } from '../stores/editStore';
const editStore = useEditStore();
const { id } = useRoute().params;
console.log(editStore.editChirp(id));

const text = ref('');


function saveChirps() {
    editStore.updateChirp(editStore.chirp);
    console.log('Chirp actualizado:' + editStore.chirp.message);
    navigateTo("/chirps");
}
</script>

<style>

</style>
