<script setup>
import { ref } from 'vue';

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
</script>
<template>
    <label for="task-due-date">{{label}}</label>
    <input type="date" id="task-due-date" class="border p-2 rounded" :placeholder="placeholder" />
</template>
<style scoped>
#task-due-date {
    background-color: #f0f0f0;
    border: unset;
    font-size: small;
    padding: 8px;
    border-radius: 100px;
    cursor: pointer;
    width: 120px;
}
</style>