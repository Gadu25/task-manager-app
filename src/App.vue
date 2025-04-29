<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import { watchEffect, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  authStore.fetchUser();
});

watchEffect(() => {
  if (!authStore.user) {
    router.push('/login');
  }
});

</script>

<template>
  <header v-if="authStore.user">
    <div class="p-4 xl:px-0 xl:w-[1200px] m-auto">
      <nav class="flex gap-4 py-4 w-full">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/my-tasks">My Tasks</RouterLink>
        <span @click="authStore.signOutUser()" class="mt-4 text-blue-500 cursor-pointer">Logout</span>
      </nav>
    </div>
  </header>

  <RouterView class="p-4 xl:px-0 xl:w-[1200px] m-auto" />
</template>

<style scoped></style>
