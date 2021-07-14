<template>

  <!-- Aplicacion para ordenar una habitacion, solo responsivo en movil, no ordenador -->

  <div id="app">
    <div class="fixed h-16 w-full bg-white z-10 bottom-0 ">
      <div class="container group bg-white focus:bg-yellow-600 mx-auto text-lg flex justify-between items-center">
        <router-link class="group focus:bg-gray-600 focus:text-white p-4 text-3xl" to="/"><i class='bx bx-home' ></i></router-link>
        <router-link class="group focus:bg-gray-600 focus:text-white p-4 text-3xl" to="/likes"><i class='bx bx-heart' ></i></router-link>
        <router-link class="group focus:bg-gray-600 focus:text-white p-4 text-3xl" to="/map"><i class='bx bx-map' ></i></router-link>
        <router-link class="group focus:bg-gray-600 focus:text-white p-4 text-3xl" to="/message"><i class='bx bx-message-detail' ></i></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

