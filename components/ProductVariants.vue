<template>
  <div class="space-y-6">
    <!-- Size Selector -->
    <div>
      <label class="block text-sm font-semibold text-gray-700 mb-3">
        Size
      </label>
      <div class="flex gap-3">
        <button
          v-for="size in sizes"
          :key="size"
          @click="selectSize(size)"
          :class="[
            'px-6 py-3 rounded-lg font-medium transition-all duration-200',
            'hover:scale-105 active:scale-95',
            selectedSize === size
              ? 'bg-accent text-white shadow-lg'
              : 'bg-white border-2 border-gray-300 hover:border-accent hover:text-accent'
          ]"
        >
          {{ size }}
        </button>
      </div>
      <p v-if="showSizeError" class="text-red-500 text-sm mt-2 animate-fade-in">
        Please select a size
      </p>
    </div>

    <!-- Color Selector -->
    <div>
      <label class="block text-sm font-semibold text-gray-700 mb-3">
        Color
      </label>
      <div class="flex gap-3">
        <button
          v-for="color in colors"
          :key="color.name"
          @click="selectColor(color)"
          :class="[
            'relative w-12 h-12 rounded-full transition-all duration-200',
            'hover:scale-110 active:scale-95',
            selectedColor?.name === color.name
              ? 'ring-4 ring-accent ring-offset-2'
              : 'ring-2 ring-gray-300 hover:ring-accent'
          ]"
          :style="{ backgroundColor: color.hex }"
          :title="color.name"
        >
          <span
            v-if="selectedColor?.name === color.name"
            class="absolute inset-0 flex items-center justify-center"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Color {
  name: string
  hex: string
}

const props = defineProps<{
  sizes: string[]
  colors: Color[]
  showSizeError?: boolean
}>()

const emit = defineEmits<{
  'update:selectedSize': [size: string]
  'update:selectedColor': [color: Color]
}>()

const selectedSize = ref<string>('')
const selectedColor = ref<Color>(props.colors[0])

const selectSize = (size: string) => {
  selectedSize.value = size
  emit('update:selectedSize', size)
}

const selectColor = (color: Color) => {
  selectedColor.value = color
  emit('update:selectedColor', color)
}

// Initialize with first color
onMounted(() => {
  emit('update:selectedColor', props.colors[0])
})
</script>
