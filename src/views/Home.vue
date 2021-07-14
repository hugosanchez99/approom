<template>
  <div class="home">
    <div class="container mx-auto">

      <div class="flex items-center justify-between p-4">
        <figure class="h-12 w-12 rounded-full overflow-hidden">
          <img class="object-cover object-center" src="https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
        </figure>

        <div class="">
          <h2 class="text-lg text-gray-500 font-semibold">Chiapas, Mexico</h2>
        </div>

        <a class="">
          <i class='bx bx-cog text-2xl' ></i>
        </a>

      </div>

      <div class="text-center">
        <p class="text-gray-500 text-lg font-bold">Hola Hugo</p>
        <p class="text-gray-800 font-semibold text-xl">Comienza a buscar un lugar</p>
      </div>

      <div class="px-4 pt-4 w-full ">
        <input class="w-full rounded-full px-2 focus:outline-none focus:ring focus:border-blue-300 text-gray-500 relative" type="text" name="buscar" placeholder="Buscar departamento" autocomplete="off">
        <i class='bx bx-search-alt text-gray-400 font-bold absolute right-8 pt-1' ></i>
      </div>

      <div class="px-4 pt-4 h-24 flex items-center justify-between items-center">
        <span class="text-white text-3xl bg-blue-500 h-16 w-16 rounded-lg p-4"><i class='bx bx-wifi' ></i></span>
        <span class="text-white text-3xl bg-blue-500 h-16 w-16 rounded-lg p-4"><i class='bx bx-tv' ></i></span>
        <span class="text-white text-3xl bg-blue-500 h-16 w-16 rounded-lg p-4"><i class='bx bx-drink' ></i></span>
        <span class="text-white text-3xl bg-blue-500 h-16 w-16 rounded-lg p-4"><i class='bx bx-bone' ></i></span>
      </div>

    </div>

    <CardApp
      imgUser="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      imgCard="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      userName="Anne Gateway"
      price="400"
      title="Holiday Inn"
      star="20"
      v-for="item in 10"
      :key="item"
    />
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
