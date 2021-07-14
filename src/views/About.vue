<template>
  <div class="container p-4">
    <h1 class="text-3xl text-gray-900 font-semibold text-center">
      Bienvenidos a <span class="block font-bold">Rest-Room</span>
    </h1>

    <p class="text-gray-800 text-xl mt-4">
      <span class="font-semibold">Rest-Room</span> es una aplicacion donde
      podras buscar una hbaitacion de tu preferencia en Tabasco, en la
      aplicación buscaras la informacion necesaria para poder escoger entre una
      habitación y otra.
    </p>

    <div class="flex items-center justify-center">
      <button class="py-2 px-4 my-6 bg-blue-500 rounded-lg hover:bg-blue-800">
        <router-link to="/"> comenzar a buscar </router-link>
      </button>
    </div>
  </div>
</template>
