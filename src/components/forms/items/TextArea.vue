<script setup>
import { ref } from 'vue'
const props = defineProps({
    label: {
        type: String,
        default: 'Label',
    },
    placeholder: {
        type: String,
        default: 'Placeholder',
    },
})
const label = ref(props.label)
const placeholder = ref(props.placeholder)
</script>
<template>
    <label for="task-description">{{label}}</label>
    <textarea id="task-description" class="border p-2 rounded" :placeholder="placeholder"></textarea>
</template>