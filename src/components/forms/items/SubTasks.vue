<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import FloatTip from '@/components/floats/FloatTip.vue';
const subTasks = ref([]);
const addTask = () => {
    subTasks.value.push({ name: '', isDone: false });
};
</script>
<template>
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
</template>