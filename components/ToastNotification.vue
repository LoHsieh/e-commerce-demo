<template>
  <Transition name="slide">
    <div
      v-if="visible"
      :class="[
        'fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-2xl',
        'flex items-center gap-3 min-w-[300px] animate-slide-in',
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
      ]"
    >
      <!-- Icon -->
      <div class="flex-shrink-0">
        <svg
          v-if="type === 'success'"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <!-- Message -->
      <p class="font-medium flex-1">{{ message }}</p>

      <!-- Close Button -->
      <button
        @click="close"
        class="flex-shrink-0 hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors duration-200"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  message: string
  type: 'success' | 'warning'
  duration?: number
}>()

const visible = ref(true)
let timer: NodeJS.Timeout | null = null

const close = () => {
  visible.value = false
}

onMounted(() => {
  const duration = props.duration || 3000
  timer = setTimeout(() => {
    close()
  }, duration)
})

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer)
  }
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
