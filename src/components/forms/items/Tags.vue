<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import FloatTip from '@/components/floats/FloatTip.vue';

const model = defineModel();
const addTag = () => {
    model.value.push({ name: '' });
};
</script>
<template>
    <div class="flex gap-2 mb-2 flex-wrap">
        <label>Tags</label>
        <FloatTip position="top" theme="dark">
            <template #tip>Add Tag</template>
            <template #item>
                <Icon icon="mynaui:add-queue-solid" width="24" height="24"
                    class="text-blue-400 hover:scale-125 transition-all cursor-pointer" @click="addTag" />
            </template>
        </FloatTip>
    </div>
    <div class="flex flex-wrap gap-2">
        <template v-for="(tag, index) in model" :key="index">
            <div class="flex items-center gap-2">
                <input type="text" v-model="tag.name" class="border p-2 rounded" placeholder="Tag name" />
                <FloatTip position="top" theme="dark">
                    <template #tip>Delete Tag</template>
                    <template #item>
                        <Icon icon="mynaui:letter-x-circle-solid" width="24" height="24"
                            class="text-red-400 hover:scale-125 transition-all cursor-pointer"
                            @click="model.splice(index, 1)" />
                    </template>
                </FloatTip>
            </div>
        </template>
    </div>
</template>