# E-commerce Product Page

A modern, fully responsive e-commerce single product page built with **Vue 3**, **Nuxt 3**, and **Tailwind CSS**. Features a clean minimalist design with smooth micro-animations and complete Docker containerization.

## ✨ Features

- **Image Gallery** with smooth fade transitions and clickable thumbnails
- **Product Variants** - Size (S, M, L) and Color (Red, Blue, Black) selectors
- **Quantity Selector** with increment/decrement buttons (1-10 range)
- **Add to Cart** with validation and toast notifications
- **Fully Responsive** design for mobile, tablet, and desktop
- **Modern Minimalist** aesthetic with vibrant accent colors
- **Smooth Micro-animations** on all interactive elements
- **Complete Docker Support** for development and production

## 🚀 Quick Start with Docker

### Development Mode (Recommended)

Run the application in development mode with hot reload:

```bash
docker-compose up
```

The application will be available at `http://localhost:3000`

### Production Build

Build and run the production Docker image:

```bash
# Build the image
docker build -t ecommerce-product .

# Run the container
docker run -p 3000:3000 ecommerce-product
```

## 💻 Local Development (Without Docker)

If you prefer to run without Docker:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Tech Stack

- **Framework**: Nuxt 3 (Vue 3)
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Containerization**: Docker & Docker Compose
- **Node**: v20 Alpine

## 📦 Project Structure

```
e-commerce-demo/
├── components/
│   ├── ImageGallery.vue       # Image gallery with thumbnails
│   ├── ProductVariants.vue    # Size and color selectors
│   ├── QuantitySelector.vue   # Quantity input with +/- buttons
│   └── ToastNotification.vue  # Toast notification component
├── pages/
│   └── index.vue              # Main product page
├── assets/
│   └── css/
│       └── main.css           # Global styles and Tailwind config
├── Dockerfile                 # Production Docker image
├── Dockerfile.dev             # Development Docker image
├── docker-compose.yml         # Docker Compose configuration
├── nuxt.config.ts             # Nuxt configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Dependencies
```

## 🎨 Component Documentation

### ImageGallery
- Displays main product image with smooth fade transitions
- Clickable thumbnail gallery
- Hover effects on thumbnails
- Responsive layout

### ProductVariants
- Size selector with visual feedback
- Color selector with color swatches
- Active state styling
- Validation error display

### QuantitySelector
- Increment/decrement buttons
- Direct input field
- Min (1) and Max (10) validation
- Disabled states for boundaries

### ToastNotification
- Slide-in animation from top
- Auto-dismiss after 3 seconds
- Success and warning variants
- Manual close button

## 🐳 Docker Commands

```bash
# Development
docker-compose up              # Start dev server
docker-compose down            # Stop dev server
docker-compose up --build      # Rebuild and start

# Production
docker build -t ecommerce-product .                    # Build image
docker run -p 3000:3000 ecommerce-product             # Run container
docker run -d -p 3000:3000 ecommerce-product          # Run in background
```

## 🧪 Testing Checklist

- [ ] Click thumbnails to verify smooth fade transitions
- [ ] Select different sizes and verify visual feedback
- [ ] Select different colors and verify selection state
- [ ] Test quantity increment/decrement buttons
- [ ] Test manual quantity input (1-10 range)
- [ ] Click "Add to Cart" without selecting size → verify warning toast
- [ ] Select size and click "Add to Cart" → verify success toast
- [ ] Test responsive design on mobile (375px), tablet (768px), desktop (1440px)
- [ ] Verify all hover effects and micro-animations

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
