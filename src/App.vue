<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
authStore.fetchUser();

</script>

<template>
  <header v-if="authStore.user">
    <div class="p-4 xl:px-0 xl:w-[1200px] m-auto">
      <nav class="flex gap-4 py-4 w-full">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/my-tasks">My Tasks</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="p-4 xl:px-0 xl:w-[1200px] m-auto" />
</template>

<style scoped></style>
