<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useTaskStore } from '@/stores/task';
import FloatTip from '@/components/floats/FloatTip.vue';
import Loading from '@/components/loaders/Loading.vue';

const route = useRoute();
const taskStore = useTaskStore();
const task = ref({});

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

onMounted(async () => {
    await taskStore.fetchTask(route.params.id);
});

watchEffect(() => {
    task.value = taskStore.task;
});
</script>
<template>
    <div v-if="!taskStore.loading && task">
        <div class="flex flex-col gap-2 rounded-xl p-6 bg-white">
            <div class="flex justify-between items-center">
                <h2 class="text-2xl font-semibold">{{ task.title }}</h2>
                <span class="font-semibold p-2 rounded flex items-center cursor-pointer"
                    :class="statusClasses[task.status]">{{
                        task.status
                    }}
                </span>
            </div>
            <span class="text-gray-500">Effectivity {{ task.startDate }} to {{ task.dueDate }}</span>
            <div class="flex gap-2">
                <span class="font-semibold text-sm p-2 rounded flex items-center"
                    :class="priorityClasses[task.priority]">{{
                        task.priority
                    }} priority
                </span>
            </div>
            <p class="font-semibold text-gray-700 mt-2">Tags</p>
            <div class="flex gap-2 flex-wrap">
                <span v-for="tag in task.tags" :key="tag" class="bg-gray-200 text-gray-800 p-2 rounded-full text-sm">
                    {{ tag.name }}
                </span>
            </div>
            <p class="text-gray-700 mt-2 text-lg">{{ task.description }}</p>
            <div class="mt-4 w-full">
                <p class=" font-semibold text-gray-700">Subtasks</p>
                <div class="flex gap-2 flex-col mt-2">
                    <div v-for="subtask in task.subTasks" :key="subtask" class="text-gray-800 p-2">
                        <FloatTip position="topRight" theme="dark">
                            <template #tip>
                                <span>Mark as done</span>
                            </template>
                            <template #item>
                                <input type="checkbox" :id="subtask.id" class="mr-2 cursor-pointer" />
                            </template>
                        </FloatTip>
                        <span class="text-lg">{{ subtask.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else="taskStore.loading" class="min-h-[400px] h-[calc(90vh-112px)]">
      <Loading/>
  </div>
</template>