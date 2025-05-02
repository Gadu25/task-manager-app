<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import HoverButton from '@/components/buttons/HoverButton.vue'
import RegularTaskCard from '@/components/cards/RegularTaskCard.vue'
import { Icon } from '@iconify/vue'
import AddTask from '@/components/forms/AddTask.vue'
import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore();

const isAddingTask = ref(false);
const toggleAddTask = () => {
  isAddingTask.value = !isAddingTask.value
}

const tasks = ref([]);

onMounted(() => {
  taskStore.fetchTasks()
})

watchEffect(() => {
  tasks.value = taskStore.tasks;
})

</script>
<template>
  <div v-if="tasks.length" class="tasks">
    <div class="flex justify-end">
      <HoverButton title="Add" @click="toggleAddTask">
        <Icon icon="mynaui:plus-solid" width="26" height="26" />
      </HoverButton>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 my-4">
      <RegularTaskCard v-for="task in tasks" :task="task" />
    </div>
  </div>
  <div v-else class="flex flex-wrap gap-6 items-center justify-center" style="height: calc(90vh - 112px)">
    <div class="w-auto h-auto mb-4 flex justify-center lg:block hidden">
      <img src="@/assets/images/tablet.png" alt="No tasks" class="h-[40vh]" />
    </div>
    <div class="flex flex-col gap-2 text-center">
      <h1 class="text-3xl font-bold text-green-600">No tasks available</h1>
      <p class="text-gray-500">Create your first task to get started.</p>
      <div class="flex justify-center mt-4">
        <HoverButton title="Add" @click="toggleAddTask">
          <Icon icon="mynaui:plus-solid" width="26" height="26" />
        </HoverButton>
      </div>
    </div>
  </div>
  <AddTask :isAddingTask="isAddingTask" @close="toggleAddTask" />
</template>

<style></style>
