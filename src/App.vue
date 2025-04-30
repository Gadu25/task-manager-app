<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import { watchEffect, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import HoverButton from './components/buttons/HoverButton.vue';

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
      <nav class="flex justify-between items-center gap-4 py-4 w-full">
        <div class="flex justify-start items-center gap-4 text-xl">
          <RouterLink to="/">Dashboard</RouterLink>
          <RouterLink to="/my-tasks">My Tasks</RouterLink>
        </div>
        <HoverButton @click="authStore.signOutUser()" title="Logout" class="cursor-pointer group">
          <Icon icon="mynaui:logout" width="24" height="24" class="group-hover:text-white" />
        </HoverButton>
      </nav>
    </div>
  </header>

  <RouterView class="p-4 xl:px-0 xl:w-[1200px] m-auto" />
</template>

<style scoped></style>
