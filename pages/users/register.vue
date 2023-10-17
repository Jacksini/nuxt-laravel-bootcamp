<template>
  <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-slate-200 shadow-sm rounded-lg">
    <div class="flex justify-center items-center">
      <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="128" 
    height="128" 
    viewBox="0 0 24 24">
      <path 
        fill="none" 
        stroke="currentColor" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="1.5" 
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"
      />
  </svg>
    </div>
    <form class="space-y-6" @submit.prevent="enviar">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <div class="mt-1">
          <input
            v-model="formData.username"
            type="text"
            name="username"
            id="username"
            required
            class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          />
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <div class="mt-1">
          <input
            v-model="formData.email"
            type="email"
            name="email"
            id="email"
            autocomplete="email"
            required
            class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          />
        </div>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <div class="mt-1">
          <input
            v-model="formData.password"
            type="password"
            name="password"
            id="password"
            autocomplete="current-password"
            required
            class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          />
        </div>
      </div>
      <div>
        <label for="ConfirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
        <div class="mt-1">
          <input
            v-model="formData.confirmPassword"
            type="password"
            name="confirmPassword"
            id="ConfirmPassword"
            autocomplete="current-password"
            required
            class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
          />
        </div>
      </div>
      <div>
        <button type="submit" class="w-full btn primar">Register</button>
      </div>
      <div class="text-sm">
          <NuxtLink to="/users/login" class="font-medium text-indigo-600 hover:text-indigo-500">Already have an account</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup>
  import { useUserStore } from '../stores/userStore';
  const userStore = useUserStore();

const formData = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
});

function enviar() {
  console.log(formData.value.username);
  console.log(formData.value.email);
  console.log(formData.value.password);
  userStore.createUser(formData.value.username, formData.value.email, formData.value.password);
}

</script>

