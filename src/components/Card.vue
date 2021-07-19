<template>
    <div>
    <div class="mb-24">
      <figure class="w-full h-72">
        <img
          class="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </figure>

      <div class="container p-4 mx-auto bg-white rounded-lg">
        <h2 class="text-lg text-gray-400 font-semibold">
          <i class="bx bx-been-here"></i>
          Tapijulapa, Tabasco
        </h2>

        <h2 class="text-3xl text-gray-800 font-semibold">Holiday Inn</h2>

        <div
          class="
            flex
            justify-between
            items-center
            text-2xl
            px-4
            text-gray-800
            my-2
          "
        >
          <span><i class="bx bxs-bed"></i> 2</span>
          <span><i class="bx bxs-bed"></i> 2</span>
          <span><i class="bx bx-wifi"></i> 2 </span>
        </div>

        <span class="text-2xl text-gray-800 font-semibold block my-2"
          >Descripción</span
        >
        <div class="h-36 overflow-auto">
          <p class="text-gray-500 bg-local">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis
            vero hic! Animi rerum quia facilis sint deleniti cumque, quo beatae
            quis aspernatur praesentium veritatis quos natus iure unde dicta?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis
            vero hic! Animi rerum quia facilis sint deleniti cumque, quo beatae
            quis aspernatur praesentium veritatis quos natus iure unde dicta?
          </p>
        </div>
      </div>

      <div class="px-4 flex flex-col">
        <label
          class="
            text-gray-800 text-lg
            font-semibold
            text-white
            py-2
            px-4
            w-full
          "
          for="fecha"
          >Fecha</label
        >
        <input class="text-lg" type="date" name="fecha" />
        <div class="p-4">
          <Button>Reservar ahora</Button>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>