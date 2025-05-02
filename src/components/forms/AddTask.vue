<script setup>
import FloatLarge from '../floats/FloatLarge.vue';
import { Icon } from '@iconify/vue';
import HoverButton from '@/components/buttons/HoverButton.vue';
import { useTaskStore } from '@/stores/task';

// form items
import Input from '@/components/forms/items/Input.vue';
import { ref } from 'vue';
import TextArea from '@/components/forms/items/TextArea.vue';
import Select from '@/components/forms/items/Select.vue';
import DatePicker from '@/components/forms/items/DatePicker.vue';

import SubTasks from '@/components/forms/items/SubTasks.vue';
import Tags from '@/components/forms/items/Tags.vue';

const emit = defineEmits(['close']);

const props = defineProps({
    isAddingTask: {
        type: Boolean,
        default: false,
    },
});

const taskStore = useTaskStore();

const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
];

const form = ref({
    title: '',
    description: '',
    priority: 'low',
    startDate: '',
    dueDate: '',
    subTasks: [],
    tags: [],
});

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
                    <Input label="Title" placeholder="Enter task title" v-model="form.title" />
                    <TextArea label="Description" placeholder="Enter task description" v-model="form.description" />

                    <div class="mt-10">
                        <SubTasks v-model="form.subTasks" />
                    </div>
                </div>
                <div class="flex flex-1 flex-col gap-2">
                    <Select label="Priority" :options="priorityOptions" v-model="form.priority" />
                    <div class="flex gap-6">
                        <DatePicker label="Start Date" placeholder="Select start date" v-model="form.startDate" />
                        <DatePicker label="Due Date" placeholder="Select due date" v-model="form.dueDate" />
                    </div>

                    <div class="mt-10">
                        <Tags v-model="form.tags" />
                    </div>
                </div>
            </div>
            <div class="flex justify-end">
                <HoverButton class="text-white" style="background: #16a34a" @click="taskStore.addTask(form)"
                    title="Save Task">
                    <Icon icon="mynaui:save-solid" width="24" height="24" />
                </HoverButton>
            </div>
        </template>
    </FloatLarge>
</template>

<style scoped></style>
