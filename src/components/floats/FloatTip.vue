<script setup>
import { ref } from 'vue'

const props = defineProps({
  position: {
    type: String,
    default: 'top', // 'top', 'bottom', 'left', 'right'
    validator: val => ['top', 'bottom', 'left', 'right', 'topRight'].includes(val)
  },
  theme: {
    type: String,
    default: 'light', // 'light', 'dark'
    validator: val => ['light', 'dark'].includes(val)
  }
})

const show = ref(false)
</script>

<template>
  <div class="inline-block relative"
       @mouseenter="show = true"
       @mouseleave="show = false">
       
    <!-- Tooltip -->
    <div
      v-if="show"
      :class="[
        'absolute z-50 whitespace-nowrap shadow-md rounded-lg p-2 text-sm transition-opacity duration-200 ease-in-out',
        positionClasses[position],
        theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'
      ]"
    >
      <slot name="tip" />
    </div>

    <!-- Target -->
    <div>
      <slot name="item" />
    </div>
  </div>
</template>

<script>
const positionClasses = {
  top: 'bottom-full left-1/2 transform -translate-x-1/2 -translate-y-[40%] -mb-2',
  topRight: 'bottom-full right-[-100%] transform translate-x-1/2 -translate-y-[40%] -mb-2',
  topLeft: 'bottom-full left-[-100%] transform -translate-x-1/2 -translate-y-[40%] -mb-2',
  bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
  bottomRight: 'top-full right-[-100%] transform translate-x-1/2 mt-2',
  bottomLeft: 'top-full left-[-100%] transform -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 transform -translate-y-1/2 -translate-x-[20%] -mr-2',
  right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
}
</script>
