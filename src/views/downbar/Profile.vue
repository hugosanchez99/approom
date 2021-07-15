<template>
  <div class="container p-4">
    <h1 class="text-2xl text-center text-gray-800 font-semibold">Profile</h1>

    <div class="flex items-center justify-center flex-col my-4">
      <figure class="h-32 w-32 rounded-full overflow-hidden">
        <img class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
      </figure>

      <h2 class="text-2xl font-semibold my-4">Hugo Francisco</h2>

      <form action="#">
          <a class="py-2 px-4 bg-red-500 rounded-full text-white font-semibold mt-4 active:bg-red-800">
              Cerrar sesión
          </a>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>