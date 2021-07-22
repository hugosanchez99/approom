<template>
  <div>
    <div class="container p-4 mx-auto">
      <h2 class="text-center font-bold my-4">Inicia sesión</h2>
      <div class="flex items-center w-full text-white relative">
        <Button @click="login" class="w-full pl-2">Login with Google</Button>
        <i class="bx bxl-google-plus text-2xl mr-2 absolute left-20"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import firebase from "firebase/app";

export default {
  components: {
    Button,
  },
  methods: {
      async login(){
         try{
              let provider = new firebase.auth.GoogleAuthProvider();
          await firebase.auth().signInWithPopup(provider)
         }catch(e){
             console.log(e)
         }
      }
  }
};
</script>