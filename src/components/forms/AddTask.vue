<script setup>
import { ref } from 'vue';
import FloatLarge from '../floats/FloatLarge.vue';
import { Icon } from '@iconify/vue';
import HoverButton  from '@/components/buttons/HoverButton.vue';
import FloatTip from '@/components/floats/FloatTip.vue';

// form items
import Input from '@/components/forms/items/Input.vue';
import TextArea from '@/components/forms/items/TextArea.vue';
import Select from '@/components/forms/items/Select.vue';
import DatePicker from '@/components/forms/items/DatePicker.vue';

import SubTasks from '@/components/forms/items/SubTasks.vue';
import Tags from '@/components/forms/items/Tags.vue';

const props = defineProps({
    isAddingTask: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['close']);

const selectedTags = ref([]);
const subTasks = ref([]);

const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
];

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
                    <Input
                        label="Title"
                        placeholder="Enter task title"
                    />
                    <TextArea
                        label="Description"
                        placeholder="Enter task description"
                    />
                    
                    <div class="mt-10">
                        <SubTasks />
                    </div>
                </div>
                <div class="flex flex-1 flex-col gap-2">
                    <Select
                        label="Priority"
                        :options="priorityOptions"
                    />
                    <DatePicker label="Due Date" placeholder="Select due date"/>

                    <div class="mt-10">
                        <Tags />
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

</style>
