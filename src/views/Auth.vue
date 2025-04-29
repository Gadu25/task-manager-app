<script setup>
import HoverButton from '@/components/buttons/HoverButton.vue';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { watchEffect } from 'vue';

const authStore = useAuthStore();
const router = useRouter();

watchEffect(() => {
    if (authStore.user) {
        router.push('/');
    }
});

</script>
<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 class="text-3xl font-bold mb-4">Task Manager</h1>
        <p class="mb-4">Please log in to continue.</p>
        <div class="flex gap-4">
            <HoverButton class="group" title="Google Login" @click="authStore.signInWithGoogle()">
                <Icon icon="mynaui:brand-google-solid" width="24" height="24"
                    class="text-green-600 group-hover:text-white" />
            </HoverButton>
        </div>
    </div>
</template>