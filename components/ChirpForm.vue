<template>
  <div>
    <form @submit.prevent="sendChirp">
      <textarea v-model="chirp.message" name="message" placeholder="What's on your mind?"
        class="block w-full bg-gray-300 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"></textarea>
      <button type="submit" class="mt-4 btn primar">CHIRP</button>
    </form>
  </div>
</template>

<script setup>
  import { useTokenStore } from '../stores/tokenStore';
  const tokenStore = useTokenStore();

  const chirp = ref({ message: '' });

  const sendChirp = () => {
  // Acceder al mensaje del chirp desde la referencia 'chirp'
  console.log('Mensaje del chirp:', chirp.value.message); // Accede a la propiedad 'message' utilizando '.value'
  // Aquí puedes realizar la lógica para enviar el chirp
  tokenStore.updateChirp(chirp.value.message);
};
</script>

<style>

</style>
