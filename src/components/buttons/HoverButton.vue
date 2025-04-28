<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Hover me!',
    },
})
</script>

<template>
    <div
        class="group shadow-md relative p-3 rounded-full bg-white hover:bg-gray-300 hover:bg-green-600 hover:text-slate-100 transition duration-300 ease-in flex gap-2 cursor-pointer items-center">
        <span class="absolute ps-2 opacity-0 group-hover:opacity-100 group-hover:relative font-medium">{{ title
        }}</span>
        <slot />
    </div>
</template>