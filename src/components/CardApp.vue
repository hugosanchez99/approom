<template>
    <div class="container mx-auto mt-6 mb-16">
        <div class="p-4 rounded-lg ">
            <figure class="h-52 w-full rounded-lg  relative">
                <span class="text-sm text-gray-600 font-semibold p-2 m-4 rounded bg-white opacity-75 absolute">Tapijulapa, Tabasco</span>

            <div class="absolute -bottom-12 justify-center bg-gray-100 w-full rounded-lg">
                <h2 class="text-gray-800 font-bold text-center block text-2xl pt-2"> {{title}} </h2>
                <div class="flex items-center">
                    <div class="w-full p-2 px-4">

                        <div class="flex w-1/2 items-center">
                            <img class="object-cover object-center rounded-full h-16 w-16" :src="imgUser" alt="">
                            <h2 class="text-gray-800 font-semibold ml-2">{{userName}}</h2>
                        </div>
                        <span>
                            <i class='bx bxs-star text-blue-500'></i>
                            <i class='bx bxs-star text-blue-500'></i>
                            <i class='bx bxs-star text-blue-500'></i>
                            <i class='bx bxs-star text-blue-500'></i>
                            <i class='bx bxs-star'></i>
                            <span class="pl-4"> {{star}} Star </span>
                        </span>

                    </div>
                    <div class="w-1/2">
                        <h2 class="text-gray-800 font-bold"> $ {{price}} MX </h2>
                        <span class="text-gray-800 p-2"><i class='bx bxs-bed' ></i> 2</span>
                        <span class="text-gray-800 p-2"><i class='bx bxs-bed' ></i> 2</span>
                    </div>
                </div>
            </div>


                <img class="w-full h-full object-cover object-center rounded-lg" :src="imgCard" alt="">
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardApp',
    props: {
        title: {
            type: String,
            default: "Not found"
        },
        imgUser: {
            type: String,
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Xdf9OyXn9BpWL30gb6cpyLnkiCCbSaH8wVB1007o9WpYBDgb6J1_afDQTdJuqwgE3xM&usqp=CAU"
        },
        imgCard: {
            type: String,
            default: "https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1"
        },
        price: {
            type: String,
            default: "0.00"
        },
        star: {
            type: String,
            default: "0"
        },
        userName: {
            type: String,
            default: "Null"
        }
    }
}
</script>