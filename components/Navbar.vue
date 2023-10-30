<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Dashboard</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/chirps">Chirps</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li v-if="!state.isLoggedIn">
            <NuxtLink to="/users/login">Login</NuxtLink>
          </li>
          <li v-else>
            <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
              :popper="{ placement: 'bottom-start' }">
              <UAvatar src="https://avatars.githubusercontent.com/u/75870084?v=4" />
              <template #account="{ item }">
                <div class="text-left">
                  <p>
                    Signed in as
                  </p>
                  <p class="truncate font-medium text-gray-900 dark:text-white">
                    {{ item.label }}
                  </p>
                </div>
              </template>
              <template #item="{ item }">
                <span class="truncate">{{ item.label }}</span>
                <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
              </template>
            </UDropdown>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/userStore';
const userStore = useUserStore();

let user = {
  email: ''
};

  const items = [
  [{
    label: localStorage.getItem('user'),
    slot: 'account',
    disabled: true
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => {
      logout();
      console.log('You have logged out');
    }
  }]
]

  function logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('perPage');
    localStorage.removeItem('actualPage');
    localStorage.removeItem('user');
    state.isLoggedIn = false;
    navigateTo('/users/login');
  }

  const state = reactive({
    isLoggedIn: false,
  });

  // Verificar el localStorage al cargar el componente
  onMounted(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedLoggedIn) {
      state.isLoggedIn = JSON.parse(storedLoggedIn);
    }
  });

  // Escuchar el evento 'userLoggedIn' para cambiar el estado de isLoggedIn
  window.addEventListener('userLoggedIn', () => {
    state.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', JSON.stringify(true)); // Guardar en el localStorage
  });
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>

