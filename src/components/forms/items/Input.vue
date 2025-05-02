<script setup>
import { ref } from 'vue';
const model = defineModel();
const props = defineProps({
    label: {
        type: String,
        default: 'Label',
    },
    placeholder: {
        type: String,
        default: 'Placeholder',
    },
});

const label = ref(props.label);
const placeholder = ref(props.placeholder);
</script>
<template>
    <label for="task-title">{{ label }}</label>
    <input type="text" id="task-title" class="border p-2 rounded" :placeholder="placeholder" v-model="model" />
</template>