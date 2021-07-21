<template>
  <div class="container p-4 mb-10 mx-auto">
    <h1 class="text-2xl text-center text-gray-800 font-semibold">
      Actractivos cercanos
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-10">
      <div
        v-for="image in images"
        :key="image.id"
        class="p-4 bg-gray-100 rounded-lg shadow-lg my-4"
      >
        <h2 class="text-2xl text-center font-semibold mb-4">
          {{ image.name }}
        </h2>
        <figure class="h-36 w-full">
          <img
            clasS="h-full w-full object-cover object-center rounded-lg"
            :src="image.url"
            alt=""
          />
        </figure>

        <h2 class="p-2 text-center bg-red-800 text-white rounded-full my-4">
          Categoría: {{ image.category }}
        </h2>

        <p>{{ image.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      images: [
        {
          id: 1,
          url: require("@/assets/tapi.jpg"),
          name: "Tapijulapa, Tabasco",
          category: "Pueblo Magico",
          text: "Declarado como pueblo magico, es un hermoso pueblito enclabado en la sierra tabsqueña.",
        },
        {
          id: 2,
          url: require("@/assets/comal.jpg"),
          name: "Comalcalco, Tabasco",
          category: "Zona Arqueologica",
          text: "Una zona hecha de barro, da un aspecto diferente a otras ciudades Mayas, asombrate con su grandeza.",
        },
        {
          id: 3,
          url: require("@/assets/ceiba.jpg"),
          name: "Puerto Ceiba, Tabasco",
          category: "Playa",
          text: "De las playas virgenes mas hermosas del estado, este hermoso pueblo te maravillara con sus playas y zona de restaurantes.",
        },
        {
          id: 4,
          url: require("@/assets/jalpa.jpeg"),
          name: "Jalpa de Mendez, Tabasco",
          category: "Ciudad Maya",
          text: "Enclavada en la zona indigana maya-yokotan del estado de tabasco, guarda la cultura y tradicion del estado de tabasco, aun sus habitantes hablan maya",
        },
        {
          id: 5,
          url: require("@/assets/teno.jpg"),
          name: "Tenosique, Tabasco",
          category: "Ciudad Maya",
          text: "Tenosique tiene los paisajes mas hermosos del estado, soo con dar un paseo en el cañon del Usumacinta quedaras maravillados, no te olvides de concer sus zonas arquelogicas llenas de magia.",
        },
        {
          id: 6,
          url: require("@/assets/bala.jpeg"),
          name: "Balancan, Tabasco",
          category: "Ciudad Maya",
          text: "Enclavada en la zona Maya de Tabasco, el pueblo y zona maya te dejaran asombrados, el rio San Pedro guarda mucho misterios en sus ciudades.",
        },
      ],
    };
  },
};
</script>