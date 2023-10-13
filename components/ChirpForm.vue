<template>
  <div>
    <form >
        <textarea
            name="message"
            placeholder="What's on your mind?"
            class="block w-full bg-gray-300 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
        ></textarea>
        <button class="mt-4 primary btn" @click="sendChirp()">CHIRP</button>
    </form>
  </div>
</template>

<script setup>
  function sendChirp() {
    console.log('Chirp enviado');
  }
</script>

<style>

</style>
