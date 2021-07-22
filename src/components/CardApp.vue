<template>
  <div>
    <div class="container mx-auto mb-16">
      <h1 class="text-center font-semibold text-2xl">Crear nuevo componente</h1>

      <div class="my-4">
        <input v-model="title" type="text" class="w-full p-2 rounded-full outline-none bg-gray-100 mt-4" placeholder="Ingrese el nombre del hotel"/>
        <input v-model="userName" type="text" class="w-full p-2 rounded-full outline-none bg-gray-100 mt-4" placeholder="Ingrese el nombre del dueño"/>
        <input v-model="imgCard" type="text" class="w-full p-2 rounded-full outline-none bg-gray-100 mt-4" placeholder="Ingrese url fotografia"/>
        <input v-model="star" type="text" class="w-full p-2 rounded-full outline-none bg-gray-100 mt-4" placeholder="Ingrese numero de estrellas"/>
        <input v-model="place" type="text" class="w-full p-2 rounded-full outline-none bg-gray-100 mt-4" placeholder="Ingrese el lugar"/>
        <input v-model="price" type="text" class="w-full p-2 rounded-full outline-none bg-gray-100 mt-4" placeholder="Ingrese el precio"/>

        <div class="flex items-center justify-center">
            <button @click="agregar" class="bg-green-800 text-white font-bold px-4 py-2 rounded mt-4 ">
                Ingresar
            </button>
        </div>

      </div>
    </div>
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
                  <span class="pl-4"> {{ hotel.star }} Estrellas </span>
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

          <div
        v-for="hotel in hoteles"
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
                  <span class="pl-4"> {{ hotel.star }} Estrellas </span>
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
  </div>
</template>

<script>
export default {
  name: "CardApp",
  props: {
    title: {
      type: String,
      default: "",
    },
    imgCard: {
      type: String,
      default:
        "",
    },
    price: {
      type: String,
      default: "",
    },
    star: {
      type: String,
      default: "",
    },
    userName: {
      type: String,
      default: "",
    },
    place: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      hoteles: [
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
     agregar(){
            this.hotels.push({
            title : this.title,
            owner: this.owner,
            imgCard : this.imgCard,
            star: this.star,
            place: this.place,
            price: this.price,
            extract: this.extract
            });

            this.title = '',
            this.owner= '',
            this.imgCard= '',
            this.star= '',
            this.place= '',
            this.price= '',
            this.extract= ''

            localStorage.setItem('gym-vue', JSON.stringify(this.hotels)); 
        }
  },
  created: function(){
    let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
    if (datosDB === null) {
      this.hotels = [];      
    }else{
      this.hotels = datosDB;
    }
  }
 
};
</script>