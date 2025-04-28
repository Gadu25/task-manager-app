<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="p-4 lg:px-0 lg:w-[1200px] m-auto">
      <nav class="flex gap-4 py-4 w-full">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/my-tasks">My Tasks</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="p-4 lg:px-0 lg:w-[1200px] m-auto" />
</template>

<style scoped></style>
