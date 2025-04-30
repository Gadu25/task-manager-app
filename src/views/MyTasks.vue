<script setup>
import { ref } from 'vue'
import HoverButton from '@/components/buttons/HoverButton.vue'
import RegularTaskCard from '@/components/cards/RegularTaskCard.vue'
import { Icon } from '@iconify/vue'
import AddTask from '@/components/forms/AddTask.vue'

const isAddingTask = ref(false);
const toggleAddTask = () => {
  isAddingTask.value = !isAddingTask.value
}

</script>
<template>
  <div class="tasks">
    <div class="flex justify-end">
      <HoverButton title="Add" @click="toggleAddTask">
        <Icon icon="mynaui:plus-solid" width="26" height="26" />
      </HoverButton>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 my-4">
      <RegularTaskCard />
      <RegularTaskCard />
      <RegularTaskCard />
      <RegularTaskCard />
      <RegularTaskCard />
      <RegularTaskCard />
      <RegularTaskCard />
    </div>
    <AddTask :isAddingTask="isAddingTask" @close="toggleAddTask" />
  </div>
</template>

<style></style>
