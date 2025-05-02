<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const props = defineProps({
    task: {
        type: Object,
        required: true,
    },
});

const route = useRoute();
const task = ref(props.task);

const statusClasses = {
    todo: 'bg-gray-500 text-gray-100',
    pending: 'bg-yellow-100 text-yellow-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
};

const priorityClasses = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
};
</script>
<template>
    <div @click="$router.push({ name: 'task', params: { id: task.id } })"
        class="flex flex-col gap-2 p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow transition-all duration-300 ease-in-out cursor-pointer hover:scale-101">
        <h2 class="text-xl font-semibold">{{ task.title }}</h2>
        <span class="text-gray-500 text-xs">Effectivity {{ task.startDate }}</span>
        <div class="flex gap-2">
            <span class="font-semibold text-xs p-1 rounded" :class="statusClasses[task.status]">{{
                task.status
                }}
            </span>
            <span class="font-semibold text-xs p-1 rounded" :class="priorityClasses[task.priority]">{{
                task.priority
                }} priority
            </span>
        </div>
        <p class="text-gray-700">{{ task.description }}</p>
        <!-- <div class="mt-4 w-full">
            <button
                class="px-4 py-2 bg-gray-100 w-full text-slate-900 rounded-full hover:bg-green-600 hover:text-white transition duration-300 ease-in-out cursor-pointer">View
                Details</button>
        </div> -->
    </div>
</template>