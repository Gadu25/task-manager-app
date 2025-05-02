<script setup>
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
</script>
<template>
    <div class="flex flex-col gap-2 mt-2">
        <label for="task-due-date">{{ label }}</label>
        <input type="date" id="task-due-date" class="border p-2 rounded" :placeholder="placeholder" v-model="model" />
    </div>
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