<script setup>
import { Icon } from '@iconify/vue';
</script>
<template>
    <div class="flex items-center justify-center w-full h-full gap-2">
        <Icon icon="mynaui:circle-notch-solid" class="animate-spinSlow" width="24" height="24" />
        <p class="text-gray-600">loading..</p>
    </div>
</template>
<style scoped>
.animate-spinSlow {
    animation: spinSlow 1s linear infinite;
}
@keyframes spinSlow {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>