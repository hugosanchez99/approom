<template>
  <div class="container p-4 mx-auto">
    <h1 class="text-2xl text-center text-gray-800 font-semibold">Profile</h1>

    <div class="flex items-center justify-center flex-col my-4">
      <figure class="h-32 w-32 rounded-full overflow-hidden">
        <img
          class="h-full w-full object-cover object-center p-4"
          src="@/assets/logo.png"
          alt=""
        />
      </figure>

      <h2 class="text-2xl font-semibold my-4">Hugo Francisco</h2>


      <a @click="logout" class="py-2 px-4 bg-red-500 rounded-full text-white font-semibold mt-4 cursor-pointer active:bg-red-800">
        Cerrar Sesión
      </a>
      
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  methods: {
    logout(){
      firebase.auth().signOut();
    }
  },
};
</script>