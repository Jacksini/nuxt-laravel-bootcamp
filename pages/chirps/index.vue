<template>
    <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <ChirpForm />

        <div class="p-6 flex space-x-2 mt-6 bg-gray-300 shadow-sm rounded-lg hover:bg-blue-200"
            v-if="tokenStore.chirps" v-for="chirp in tokenStore.chirps">
            <ChirpCard :chirp="chirp"/> 
        </div>
        <div class="p-6 flex space-x-2 mt-6 bg-gray-300 shadow-sm rounded-lg hover:bg-blue-200 text-center object-center" v-else>
            <span class="loader object-center"></span>
        </div>
    </div>
</template>
    
<script setup>
import { useTokenStore } from '../stores/tokenStore';
const tokenStore = useTokenStore();
</script>

<style>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: pulse 1s linear infinite;
}
.loader:after {
  content: '';
  position: absolute;
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: scaleUp 1s linear infinite;
}

@keyframes scaleUp {
  0% { transform: translate(-50%, -50%) scale(0) }
  60% , 100% { transform: translate(-50%, -50%)  scale(1)}
}
@keyframes pulse {
  0% , 60% , 100%{ transform:  scale(1) }
  80% { transform:  scale(1.2)}
}
</style>