<template>
  <div>
    <form @submit.prevent="sendChirp">
      <textarea 
      v-model="addChirp" 
      name="message" 
      placeholder="What's on your mind?"
      class="block w-full bg-gray-300 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
      >{{ addChirp }}</textarea>
      <button type="submit" class="mt-4 btn primar">CHIRP</button>
    </form>
  </div>
</template>

<script setup>
  import { useTokenStore } from '../stores/tokenStore';
  const tokenStore = useTokenStore();

  const addChirp = ref('');

  async function sendChirp() {
    try{
      console.log(addChirp.value);
      await tokenStore.createChirp(addChirp.value);
      addChirp.value = '';
    } catch (error) {
        console.error('Error al enviar chirp:', error);
    }
  }
</script>

<style>

</style>
