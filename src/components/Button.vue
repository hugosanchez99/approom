<template>
    <div>
        <button @click="$emit('click')" class="px-4 py-2 rounded-full bg-blue-500 w-full outline-none text-white font-semibold active:bg-blue-800">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    
}
</script>

