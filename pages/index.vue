<template>
  <div class="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Product Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Image Gallery Section -->
        <div class="lg:sticky lg:top-8">
          <ImageGallery :images="productImages" :alt-text="product.name" />
        </div>

        <!-- Product Details Section -->
        <div class="space-y-8">
          <!-- Product Header -->
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-2">
              {{ product.name }}
            </h1>
            <p class="text-3xl font-semibold text-accent">
              ${{ product.price }}
            </p>
          </div>

          <!-- Product Description -->
          <div class="prose prose-gray">
            <p class="text-gray-600 leading-relaxed">
              {{ product.description }}
            </p>
          </div>

          <!-- Divider -->
          <div class="border-t border-gray-200"></div>

          <!-- Product Variants -->
          <ProductVariants
            :sizes="product.sizes"
            :colors="product.colors"
            :show-size-error="showSizeError"
            @update:selected-size="handleSizeChange"
            @update:selected-color="handleColorChange"
          />

          <!-- Divider -->
          <div class="border-t border-gray-200"></div>

          <!-- Quantity Selector -->
          <QuantitySelector v-model="quantity" :min="1" :max="10" />

          <!-- Divider -->
          <div class="border-t border-gray-200"></div>

          <!-- Add to Cart Button -->
          <button
            @click="handleAddToCart"
            class="w-full btn-primary text-lg"
          >
            Add to Cart
          </button>

          <!-- Product Features -->
          <div class="bg-gray-100 rounded-xl p-6 space-y-4">
            <h3 class="font-semibold text-gray-900 text-lg">Features</h3>
            <ul class="space-y-2">
              <li
                v-for="(feature, index) in product.features"
                :key="index"
                class="flex items-start gap-3"
              >
                <svg
                  class="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notifications -->
    <ToastNotification
      v-if="toast.visible"
      :key="toast.id"
      :message="toast.message"
      :type="toast.type"
      :duration="3000"
    />
  </div>
</template>

<script setup lang="ts">
interface Color {
  name: string
  hex: string
}

interface Product {
  name: string
  price: number
  description: string
  sizes: string[]
  colors: Color[]
  features: string[]
}

// Product Data
const product: Product = {
  name: 'AeroMax Pro Sneakers',
  price: 189.99,
  description:
    'Experience ultimate comfort and style with the AeroMax Pro Sneakers. Engineered with cutting-edge cushioning technology and premium materials, these sneakers are perfect for both athletic performance and everyday wear. The sleek design combines modern aesthetics with unparalleled functionality.',
  sizes: ['S', 'M', 'L'],
  colors: [
    { name: 'Red', hex: '#ef4444' },
    { name: 'Blue', hex: '#3b82f6' },
    { name: 'Black', hex: '#1f2937' },
  ],
  features: [
    'Advanced cushioning technology for maximum comfort',
    'Breathable mesh upper for enhanced ventilation',
    'Durable rubber outsole with superior traction',
    'Lightweight design for all-day wear',
    'Premium materials with expert craftsmanship',
  ],
}

// Product Images
const productImages = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=800&fit=crop',
]

// State
const selectedSize = ref<string>('')
const selectedColor = ref<Color>(product.colors[0])
const quantity = ref<number>(1)
const showSizeError = ref<boolean>(false)

// Toast State
const toast = ref({
  visible: false,
  message: '',
  type: 'success' as 'success' | 'warning',
  id: 0,
})

// Handlers
const handleSizeChange = (size: string) => {
  selectedSize.value = size
  showSizeError.value = false
}

const handleColorChange = (color: Color) => {
  selectedColor.value = color
}

const handleAddToCart = () => {
  // Validate size selection
  if (!selectedSize.value) {
    showSizeError.value = true
    showToast('Please select a size before adding to cart', 'warning')
    return
  }

  // Success
  showToast(
    `Added ${quantity.value} x ${product.name} (${selectedSize.value}, ${selectedColor.value.name}) to cart!`,
    'success'
  )
}

const showToast = (message: string, type: 'success' | 'warning') => {
  toast.value = {
    visible: true,
    message,
    type,
    id: Date.now(),
  }

  // Reset toast visibility after animation
  setTimeout(() => {
    toast.value.visible = false
  }, 3500)
}
</script>
