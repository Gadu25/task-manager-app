<script setup>
</script>
<template>
    <div class="">
        <div
            class="flex flex-col gap-2 p-6 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <span class="text-green-600 font-semibold text-xs">Task Type</span>
            <h2 class="text-xl font-semibold">Task Title</h2>
            <span class="text-gray-500 text-xs">Due Date</span>
            <p class="text-gray-700">Task description goes here. This is a brief overview of the task.</p>
            <div class="mt-4 w-full">
                <button
                    class="px-4 py-2 bg-gray-100 w-full text-slate-900 rounded-full hover:bg-green-600 hover:text-white transition duration-300 ease-in-out cursor-pointer">View
                    Details</button>
            </div>
        </div>
    </div>
</template>