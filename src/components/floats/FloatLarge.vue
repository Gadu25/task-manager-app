<script setup>
const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};
</script>
<template>
    <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-100/50">
        <div class="bg-white shadow-lg rounded-2xl p-5 w-full max-w-6xl max-h-[85vh] overflow-auto mx-4 relative">
            <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" @click="close">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <slot name="title"></slot>
            <slot name="form"></slot>
        </div>
    </div>
</template>