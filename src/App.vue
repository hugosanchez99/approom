<template>

  <!-- Aplicacion para ordenar una habitacion, solo responsivo en movil, no ordenador -->

  <div id="app">
    <!-- Nav -->
    <div class="flex items-center justify-between p-4">
        <figure class="h-12 w-12 rounded-full overflow-hidden">
          <router-link to="/profile">
            <img class="object-cover object-center" src="https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
          </router-link>
        </figure>

        <div class="">
          <h2 class="text-lg text-gray-500 font-semibold">Tabasco, México</h2>
        </div>

        <a class="">
          <i class='bx bx-cog text-2xl' ></i>
        </a>
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

