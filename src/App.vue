<template>

  <!-- Aplicacion para ordenar una habitacion, solo responsivo en movil, no ordenador -->

  <div id="app">
    <!-- Nav -->
    <div class="flex items-center justify-between p-4">
        <figure class="h-12 w-12 rounded-full ">
          <router-link to="/profile">
            <img class="object-cover object-center" src="@/assets/logo.png" alt="">
          </router-link>
        </figure>

        <div class="">
          <h2 class="text-lg text-gray-500 font-semibold">Tabasco, México</h2>
        </div>

    </div>

    <!-- Footer -->
    <div class="fixed h-16 w-full bg-white z-10 bottom-0 ">
      <div class="container group bg-white focus:bg-yellow-600 mx-auto text-lg flex justify-between items-center">
        <router-link class="group focus:bg-gray-600 focus:text-white p-4 text-3xl" to="/"><i class='bx bx-home' ></i></router-link>
        <router-link class="group focus:bg-gray-600 focus:text-white p-4 text-3xl" to="/about"><i class='bx bx-help-circle'></i></router-link>
        <router-link class="group focus:bg-gray-600 focus:text-white p-4 text-3xl" to="/places"><i class='bx bx-door-open' ></i></router-link>
        <router-link class="group focus:bg-gray-600 focus:text-white p-4 text-3xl" to="/profile"><i class='bx bx-user' ></i></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

