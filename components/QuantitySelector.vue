<template>
  <div class="flex items-center gap-4">
    <label class="text-sm font-semibold text-gray-700">Quantity</label>
    <div class="flex items-center bg-white rounded-lg border-2 border-gray-300 overflow-hidden">
      <!-- Decrement Button -->
      <button
        @click="decrement"
        :disabled="quantity <= min"
        :class="[
          'px-4 py-2 font-bold text-lg transition-all duration-200',
          quantity <= min
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
        ]"
      >
        −
      </button>

      <!-- Quantity Input -->
      <input
        v-model.number="quantity"
        @input="validateInput"
        @blur="handleBlur"
        type="number"
        :min="min"
        :max="max"
        class="w-16 text-center font-semibold text-gray-900 border-x-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
      />

      <!-- Increment Button -->
      <button
        @click="increment"
        :disabled="quantity >= max"
        :class="[
          'px-4 py-2 font-bold text-lg transition-all duration-200',
          quantity >= max
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
        ]"
      >
        +
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  min?: number
  max?: number
  modelValue?: number
}>(), {
  min: 1,
  max: 10,
  modelValue: 1
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const quantity = ref(props.modelValue)

const increment = () => {
  if (quantity.value < props.max) {
    quantity.value++
    emit('update:modelValue', quantity.value)
  }
}

const decrement = () => {
  if (quantity.value > props.min) {
    quantity.value--
    emit('update:modelValue', quantity.value)
  }
}

const validateInput = () => {
  if (quantity.value < props.min) {
    quantity.value = props.min
  } else if (quantity.value > props.max) {
    quantity.value = props.max
  }
  emit('update:modelValue', quantity.value)
}

const handleBlur = () => {
  if (!quantity.value || isNaN(quantity.value)) {
    quantity.value = props.min
    emit('update:modelValue', quantity.value)
  }
}

watch(() => props.modelValue, (newValue) => {
  quantity.value = newValue
})
</script>

<style scoped>
/* Hide number input arrows */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
