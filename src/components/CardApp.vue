<template>
  <div
    class="
      container
      mx-auto
      mt-6
      mb-24
      grid grid-cols-1
      md:grid-cols-3
      md:gap-4
      cursor-pointer
    "
  >
    <div
      v-for="hotel in hotels"
      :key="hotel.id"
      class="p-4 rounded-lg mb-10"
      v-on:click="info(hotel.id)"
    >
      <figure class="h-52 w-full rounded-lg relative">
        <span
          class="
            text-sm text-gray-600
            font-semibold
            p-2
            m-4
            rounded
            bg-white
            opacity-75
            absolute
          "
        >
          {{ hotel.place }}
        </span>

        <div
          class="
            absolute
            -bottom-12
            justify-center
            bg-gray-100
            w-full
            rounded-lg
          "
        >
          <h2 class="text-gray-800 font-bold text-center block text-2xl pt-2">
            {{ hotel.title }}
          </h2>
          <div class="flex items-center">
            <div class="w-full p-2 px-4">
              <div class="flex w-1/2 items-center py-2">
                <h2 class="text-gray-800 font-semibold ml-2">
                  {{ hotel.userName }}
                </h2>
              </div>
              <span>
                <i class="bx bxs-star text-blue-500"></i>
                <i class="bx bxs-star text-blue-500"></i>
                <i class="bx bxs-star text-blue-500"></i>
                <i class="bx bxs-star text-blue-500"></i>
                <i class="bx bxs-star"></i>
                <span class="pl-4"> {{ hotel.star }} Star </span>
              </span>
            </div>
            <div class="w-1/2">
              <h2 class="text-gray-800 font-bold">$ {{ hotel.price }} MX</h2>
              <span class="text-gray-800 p-2"
                ><i class="bx bxs-bed"></i> 2</span
              >
              <span class="text-gray-800 p-2"
                ><i class="bx bxs-bed"></i> 2</span
              >
            </div>
          </div>
        </div>

        <img
          class="w-full h-full object-cover object-center rounded-lg"
          :src="hotel.imgCard"
          alt=""
        />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardApp",
  props: {
    title: {
      type: String,
      default: "Not found",
    },
    imgCard: {
      type: String,
      default:
        "https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1",
    },
    price: {
      type: String,
      default: "0.00",
    },
    star: {
      type: String,
      default: "0",
    },
    userName: {
      type: String,
      default: "Null",
    },
    place: {
      type: String,
      default: "Unknown",
    },
  },
  data() {
    return {
      hotels: [
        {
          id: 1,
          title: "Marriot Hotel",
          imgCard: require("@/assets/hotels/h1.jpg"),
          price: "250.00",
          star: "4",
          userName: "Mario Perez",
          place: "Villahermosa",
        },
        {
          id: 2,
          title: "Maya Hotel",
          imgCard: require("@/assets/hotels/h2.jpg"),
          price: "450.00",
          star: "5",
          userName: "Jose Estrada",
          place: "Villahermosa",
        },
        {
          id: 3,
          title: "Express City",
          imgCard: require("@/assets/hotels/h3.jpg"),
          price: "350.00",
          star: "5",
          userName: "Dora Maria",
          place: "Villahermosa",
        },
      ],
    };
  },
  methods: {
    info(id) {
      this.$router.push("/view/" + id);
    },
  },
};
</script>