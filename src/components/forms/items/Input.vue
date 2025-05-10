<script setup>
import { Field, ErrorMessage } from 'vee-validate';
import { computed } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
});
const inputId = computed(() => `input-${props.name}`);
</script>

<template>
    <div class="flex flex-col gap-1 w-full">
        <label :for="inputId" class="text-sm font-medium">{{ label }}</label>
        <Field :id="inputId" :name="name" :placeholder="placeholder" :type="type"
            class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <ErrorMessage :name="name" class="text-red-500 text-xs mt-1" />
    </div>
</template>
