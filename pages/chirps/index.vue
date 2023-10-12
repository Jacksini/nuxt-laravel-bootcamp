<template>
    <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <ChirpForm/>

        <div class="p-6 flex space-x-2 mt-6 bg-gray-300 shadow-sm rounded-lg hover:bg-blue-200"  v-for="chirp in chirps">
            <ChirpCard :chirp="chirp"/>
        </div>
    </div>
</template>
    
<script setup>
  const { data: chirps } = useFetch('http://localhost:3001/chirps');
</script>

<style>

</style>