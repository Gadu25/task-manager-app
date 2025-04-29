<script setup>
import HoverButton from '@/components/buttons/HoverButton.vue';
import { Icon } from '@iconify/vue';

import { useAuthStore } from '@/stores/auth'; // adjust the path
import { onMounted } from 'vue';

const authStore = useAuthStore();
const { user, signInWithGoogle, signOutUser, fetchUser } = authStore;

onMounted(() => {
    fetchUser(); // Listen to auth changes immediately when component mounts
});

</script>
<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 class="text-3xl font-bold mb-4">Task Manager</h1>
        <p class="mb-4">Please log in to continue.</p>
        <div class="flex gap-4">
            <HoverButton title="Google Login" @click="signInWithGoogle">
                <Icon icon="mynaui:brand-google-solid" width="24" height="24" />
            </HoverButton>
        </div>
    </div>
</template>