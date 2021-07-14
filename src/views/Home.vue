<template>
  <div class="home">

    <CardApp 
    imgUser="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    imgCard="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    userName="Anne Gateway"
    price="400"
    star="20"
    v-for="item in 10" :key="item"
   />

  </div>
</template>

<script>
// @ is an alias to /src
import CardApp from '@/components/CardApp.vue'

export default {
  name: 'Home',
  components: {
    CardApp
  }
}
</script>
