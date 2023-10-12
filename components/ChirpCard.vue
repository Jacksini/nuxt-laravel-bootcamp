<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 -scale-x-100" fill="none" viewBox="0 0 24 24"
    stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
  <div class="flex-1">
    <div class="flex justify-between items-center">
      <div>
        <span class="text-gray-800">{{ chirp.name }}</span>
        <small class="ml-2 text-sm text-gray-600">{{ chirp.date }}</small>
      </div>
      <UDropdown :items="items" :popper="{ placement: 'right-start' }" >
        <button class="hover:bg-zinc-400 rounded-lg p-1 dropdown">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </button>
      </UDropdown>
    </div>
    <p class="mt-4 text-lg text-gray-900">{{ chirp.message }}</p>
  </div>
</template>

<script setup>

const { chirp } = defineProps([
  'chirp'
]);

const items = [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      navigateTo(`/chirps/${chirp.id}`);
    }
  }],[{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
    shortcuts: ['D'],
    click: () => {
      deleteChirp(chirp.id);
    }
  }]
]

function deleteChirp(id){
  useFetch(`http://localhost:3001/chirps/${id}`, {
    method: 'DELETE'
  });
  
}
</script>

<style>

</style>
