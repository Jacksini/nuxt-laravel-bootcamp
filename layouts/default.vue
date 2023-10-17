<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Dashboard</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/chirps">Chirps</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/users/login">Login</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import { useTokenStore } from '../stores/tokenStore';
  const tokenStore = useTokenStore();
  tokenStore.getChirps();
</script>
  
<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>