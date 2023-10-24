<template>
  <div>
    <div>
      <ClientOnly>
        <Navbar/>
      </ClientOnly>
      <slot />
    </div>
  </div>
</template>

<script setup>
  import { useTokenStore } from '../stores/tokenStore';
  const tokenStore = useTokenStore();
  if (process.client) {
    if (localStorage.getItem('accessToken')) {
        tokenStore.getChirps();
    } else {
        console.log("Iniciar sesión");
        navigateTo('/users/login');
    }
  }
</script>
  
<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>