<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="flex gap-4 p-4 w-full">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/my-tasks">My Tasks</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="p-4"/>
</template>

<style scoped>
</style>
