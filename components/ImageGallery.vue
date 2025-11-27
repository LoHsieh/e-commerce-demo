<template>
  <div class="space-y-4">
    <!-- Main Image Display -->
    <div class="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
      <Transition name="fade" mode="out-in">
        <NuxtImg
          :key="selectedImage"
          :src="selectedImage"
          :alt="altText"
          class="w-full h-full object-cover"
          width="800"
          height="800"
          preload
          fetchpriority="high"
          sizes="100vw sm:50vw md:400px lg:600px"
        />
      </Transition>
    </div>

    <!-- Thumbnail Gallery -->
    <div class="grid grid-cols-4 gap-3">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="selectImage(image)"
        :class="[
          'aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300',
          'hover:scale-105 hover:shadow-md',
          selectedImage === image 
            ? 'border-accent shadow-lg ring-2 ring-accent ring-opacity-50' 
            : 'border-gray-200 hover:border-accent'
        ]"
      >
        <NuxtImg
          :src="image"
          :alt="`${altText} view ${index + 1}`"
          class="w-full h-full object-cover"
          width="200"
          height="200"
          loading="lazy"
          sizes="25vw sm:12vw md:100px"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[]
  altText: string
}>()

const selectedImage = ref(props.images[0])

const selectImage = (image: string) => {
  selectedImage.value = image
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
