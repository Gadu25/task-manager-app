<script setup>
import { ref } from 'vue';
import FloatLarge from '../floats/FloatLarge.vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
    isAddingTask: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['close']);

const selectedTags = ref([]);
const subTasks = ref([]);


const addTask = () => {
    subTasks.value.push({ name: '', isDone: false });
};
const addTag = () => {
    selectedTags.value.push({ name: '' });
};
const close = () => {
    emit('close');
};

</script>
<template>
    <FloatLarge :class="{ 'hidden': !isAddingTask }" @close="close">
        <template #title>
            <h2 class="text-xl font-bold mb-4">Add Task</h2>
        </template>
        <template #form>
            <div class="flex flex-row gap-8 w-full mb-4">
                <div class="flex flex-1 flex-col gap-2">
                    <label for="task-title">Title</label>
                    <input type="text" id="task-title" class="border p-2 rounded" />
                    <label for="task-description">Task Description</label>
                    <textarea id="task-description" class="border p-2 rounded"></textarea>
                    <div class="mt-8">
                        <div class="flex gap-2 mb-2">
                            <Icon icon="mynaui:add-queue-solid" width="24" height="24"
                                class="text-blue-400 hover:scale-125 transition-all cursor-pointer" @click="addTask" />
                            <label for="sub-tasks">Sub Tasks</label>
                        </div>
                        <template v-for="(subTask, index) in subTasks" :key="index">
                            <div class="flex items-center gap-2 mb-2">
                                <input type="text" v-model="subTask.name" class="border p-2 rounded flex-1" />
                                <Icon icon="mynaui:delete-solid" width="24" height="24"
                                    class="text-red-400 hover:scale-125 transition-all cursor-pointer"
                                    @click="subTasks.splice(index, 1)" />
                            </div>
                        </template>
                    </div>
                </div>
                <div class="flex flex-1 flex-col gap-2">
                    <label for="task-priority">Priority</label>
                    <select id="task-priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <label for="task-due-date">Due Date</label>
                    <input type="date" id="task-due-date" class="border p-2 rounded" />
                    <div class="mt-8">
                        <div class="flex gap-2 mb-2 flex-wrap">
                            <label>Tags</label>
                            <Icon icon="mynaui:add-queue-solid" width="24" height="24"
                                class="text-blue-400 hover:scale-125 transition-all cursor-pointer" @click="addTag" />
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <template v-for="(tag, index) in selectedTags" :key="index">
                                <div class="flex items-center gap-2">
                                    <input type="text" v-model="tag.name" class="border p-2 rounded" />
                                    <Icon icon="mynaui:letter-x-circle-solid" width="24" height="24"
                                        class="text-red-400 hover:scale-125 transition-all cursor-pointer"
                                        @click="selectedTags.splice(index, 1)" />
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </FloatLarge>
</template>

<style scoped>
#task-priority {
    background-color: #f0f0f0;
    border: unset;
    font-size: small;
    padding: 8px;
    border-radius: 100px;
    width: 90px;
    cursor: pointer;
}

#task-due-date {
    background-color: #f0f0f0;
    border: unset;
    font-size: small;
    padding: 8px;
    border-radius: 100px;
    cursor: pointer;
    width: 120px
}

label {
    font-size: small;
}

input,
textarea {
    border-radius: 8px;
}
</style>