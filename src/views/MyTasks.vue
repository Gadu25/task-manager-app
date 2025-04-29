<script setup>
import HoverButton from '@/components/buttons/HoverButton.vue'
import RegularTaskCard from '@/components/cards/RegularTaskCard.vue'
import { Icon } from '@iconify/vue'
</script>
<template>
  <div class="tasks">
    <div class="flex justify-end">
      <HoverButton title="Add">
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
  </div>
</template>

<style></style>
