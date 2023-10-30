<template>
  <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
    <ChirpForm />
    <div class="p-6 flex space-x-2 mt-6 bg-gray-300 shadow-sm rounded-lg hover:bg-blue-200"
        v-for="chirp in tokenStore.chirps.data" :key="chirp.id">
        <ChirpCard :chirp="chirp"/> 
    </div>
    <div class="p-6 flex space-x-2 mt-6 bg-gray-300 shadow-sm rounded-lg hover:bg-blue-200 text-center object-center" v-if="!tokenStore.chirps.total">
        <span class="loader grid place-items-center"></span>
        <div class="grid place-items-center ml-6">Loading Chirps...</div>
    </div>
    <div 
      class="grid place-items-center mt-6"
      v-if="tokenStore.chirps.total"
    >
      <UPagination 
        v-model="page"
        :page-count=tokenStore.chirps.per_page
        :total="items"
      />
      <div class="mt-7">
      <USelectMenu v-model="selected" :options="perPage" size="xl" option-attribute="num"/>
    </div>
    </div>
  </div>
</template>
    
<script setup>
import { useTokenStore } from '../stores/tokenStore';
import { useUserStore } from '../stores/userStore';
  const tokenStore = useTokenStore();
  const userStore = useUserStore(); 
  userStore.requestUser();
  const page = ref(tokenStore.chirps.current_page);
  const items = ref(tokenStore.chirps.total);

  const perPage = [{
    num: 4
  }, {
    num: 8,
  }, {
    num: 16,
  }, {
    num: 32,
  }]

  const initializePerPage = () => {
    if (process.client) {
      if (!localStorage.getItem('perPage')) {
        localStorage.setItem('perPage', '4');
      } else {
        selected.value = localStorage.getItem('perPage');
      }
    }
  };

  const selected = ref('4');

  initializePerPage();
  

  watch([() => tokenStore.chirps.current_page, () => tokenStore.chirps.total, () => perPage.num], ([newPage, newItems, newValue], [oldPage, oldItems, oldValue]) => {
    page.value = newPage;
    items.value = newItems;
    perPage.value = newValue;
    // console.log('Puntos de depuración:', { newPage, newItems, newValue, oldPage, oldItems, oldValue });
  });

  //Cambio del actualPage
  watch(page, async (newPage, oldPage) => {
    if (newPage !== oldPage) {
      localStorage.setItem('actualPage', newPage);
      await tokenStore.getChirps(localStorage.getItem('actualPage'), localStorage.getItem('perPage'));
    }
  });

  //Cambio del perPage
  watch(selected, async (newValue, oldValue) => {
    // console.log('El valor seleccionado ha cambiado de', oldValue, 'a', newValue);
    localStorage.setItem('actualPage', 1);
    localStorage.setItem('perPage', newValue.num);
    await tokenStore.getChirps(localStorage.getItem('actualPage'), localStorage.getItem('perPage')); 
  });

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