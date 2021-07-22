<template>
  <div class="home">
    <div class="container mx-auto">
      <div class="text-center">
        <p class="text-gray-500 text-lg font-bold">Hola Viajero</p>
        <p class="text-gray-800 font-semibold text-xl">
          Comienza a buscar un lugar
        </p>
      </div>

      <div
        class="px-4 pt-4 h-24 flex items-center justify-between items-center"
      >
        <span class="text-white text-3xl bg-blue-500 h-16 w-16 rounded-lg p-4"
          ><i class="bx bx-wifi"></i
        ></span>
        <span class="text-white text-3xl bg-blue-500 h-16 w-16 rounded-lg p-4"
          ><i class="bx bx-tv"></i
        ></span>
        <span class="text-white text-3xl bg-blue-500 h-16 w-16 rounded-lg p-4"
          ><i class="bx bx-drink"></i
        ></span>
        <span class="text-white text-3xl bg-blue-500 h-16 w-16 rounded-lg p-4"
          ><i class="bx bx-bone"></i
        ></span>
      </div>
    </div>

      <div class="container mx-auto mb-4">
        <CardApp />
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import CardApp from "@/components/CardApp.vue";

export default {
  name: "Home",
  components: {
    CardApp,
  },
};
</script>
