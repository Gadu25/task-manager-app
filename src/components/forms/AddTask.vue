<script setup>
import { ref } from 'vue';
import FloatLarge from '../floats/FloatLarge.vue';
import { Icon } from '@iconify/vue';
import HoverButton  from '@/components/buttons/HoverButton.vue';
import FloatTip from '@/components/floats/FloatTip.vue';

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
                    <input type="text" id="task-title" class="border p-2 rounded" placeholder="Enter task title" />
                    
                    <label for="task-description">Task Description</label>
                    <textarea id="task-description" class="border p-2 rounded" placeholder="Write a detailed task description"></textarea>
                    
                    <div class="mt-10">
                        <div class="flex gap-2 mb-2">
                            <FloatTip position="topRight" theme="dark">
                                <template #tip>Add Sub Task</template>
                                <template #item>
                                    <Icon icon="mynaui:add-queue-solid" width="24" height="24"
                                        class="text-blue-400 hover:scale-125 transition-all cursor-pointer"
                                        @click="addTask" />
                                </template>
                            </FloatTip>
                            <label for="sub-tasks">Sub Tasks</label>
                        </div>
                        <template v-for="(subTask, index) in subTasks" :key="index">
                            <div class="flex items-center gap-2 mb-2">
                                <input type="text" v-model="subTask.name" class="border p-2 rounded flex-1" placeholder="Sub-task name" />
                                <FloatTip position="right" theme="dark">
                                    <template #tip>Delete Task</template>
                                    <template #item>
                                        <Icon icon="mynaui:delete-solid" width="24" height="24"
                                            class="text-red-400 hover:scale-125 transition-all cursor-pointer"
                                            @click="subTasks.splice(index, 1)" />
                                    </template>
                                </FloatTip>
                            </div>
                        </template>
                    </div>
                </div>

                <div class="flex flex-1 flex-col gap-2">
                    <label for="task-priority">Priority</label>
                    <div class="relative inline-block w-[120px]">
                        <select id="task-priority" class="appearance-none w-full">
                            <option value="" disabled selected hidden>Select priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    <label for="task-due-date">Due Date</label>
                    <input type="date" id="task-due-date" class="border p-2 rounded" placeholder="Select due date" />

                    <div class="mt-10">
                        <div class="flex gap-2 mb-2 flex-wrap">
                            <label>Tags</label>
                            <FloatTip position="top" theme="dark">
                                <template #tip>Add Tag</template>
                                <template #item>
                                    <Icon icon="mynaui:add-queue-solid" width="24" height="24"
                                        class="text-blue-400 hover:scale-125 transition-all cursor-pointer"
                                        @click="addTag" />
                                </template>
                            </FloatTip>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <template v-for="(tag, index) in selectedTags" :key="index">
                                <div class="flex items-center gap-2">
                                    <input type="text" v-model="tag.name" class="border p-2 rounded" placeholder="Tag name" />
                                    <FloatTip position="top" theme="dark">
                                        <template #tip>Delete Tag</template>
                                        <template #item>
                                            <Icon icon="mynaui:letter-x-circle-solid" width="24" height="24"
                                                class="text-red-400 hover:scale-125 transition-all cursor-pointer"
                                                @click="selectedTags.splice(index, 1)" />
                                        </template>
                                    </FloatTip>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end">
                <HoverButton class="text-white" style="background: #16a34a" @click="close" title="Save Task">
                    <Icon icon="mynaui:save-solid" width="24" height="24" />
                </HoverButton>
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
    width: 120px;
    cursor: pointer;
}

#task-due-date {
    background-color: #f0f0f0;
    border: unset;
    font-size: small;
    padding: 8px;
    border-radius: 100px;
    cursor: pointer;
    width: 120px;
}

label {
    font-size: small;
}

input,
textarea {
    border-radius: 8px;
}
</style>
