<template>
    <div class="container p-4 mb-10">
        <h1 class="text-2xl text-center text-gray-800 font-semibold">Ingresar un nuevo Hotel</h1>

        <form class="w-full mt-4">
            <input class="w-full border-2 border-gray-300 px-4 py-2 rounded-full mb-2 outline-none" type="text" placeholder="Ingrese el nombre del hotel">
            <input class="w-full border-2 border-gray-300 px-4 py-2 rounded-full mb-2 outline-none" type="text" placeholder="Ingrese el nombre del propetario">
            <input class="w-full border-2 border-gray-300 px-4 py-2 rounded-full mb-2 outline-none" type="number" placeholder="Precio por noche">
            <input class="w-full border-2 border-gray-300 px-4 py-2 rounded-full mb-2 outline-none" type="number" placeholder="Cantidad de estrellas">
            <input class="w-full border-2 border-gray-300 px-4 py-2 rounded-full mb-2 outline-none" type="text" placeholder="Ingrese imagen foto del hotel">
            <input class="w-full border-2 border-gray-300 px-4 py-2 rounded-full mb-2 outline-none" type="text" placeholder="Ingrese imagen de perfil propetario">
            <textarea class="w-full border-2 border-gray-300 px-4 py-2 rounded-lg mb-2 outline-none" placeholder="Ingrese una descripción breve del hotel" name="Descripcion" rows="10"></textarea>

            <button class="py-2 px-4 w-full rounded-lg bg-blue-500 mb-4 text-white text-xl font-semibold active:bg-blue-800">
                Ingresar
            </button>

        </form>

    </div>
</template>

<script>
export default {
    
}
</script>