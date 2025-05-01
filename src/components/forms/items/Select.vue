<script setup>
import { ref } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: 'Label',
    },
    options: {
        type: Array,
        default: () => [],
    },
});

const label = ref(props.label);
const options = ref(props.options);
</script>
<template>
    <label for="task-priority">{{label}}</label>
    <div class="relative inline-block w-[120px]">
        <div class="relative inline-block w-[120px]">
            <select id="task-priority" class="appearance-none w-full">
                <option value="" disabled selected hidden>Select priority</option>
                <option v-for="option in options" :value="option.value">{{option.label}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
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
</style>