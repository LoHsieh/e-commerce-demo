import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

    image: {
        provider: 'none',
        domains: ['images.unsplash.com']
    },

    app: {
        baseURL: '/e-commerce-demo/',
        buildAssetsDir: 'assets',
        head: {
            title: 'Premium Sneakers - E-commerce',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Modern e-commerce product page showcasing premium sneakers' }
            ],
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'preconnect', href: 'https://images.unsplash.com' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
            ]
        }
    },

    css: ['~/assets/css/main.css'],

    devServer: {
        host: '0.0.0.0',
        port: 3000
    },

    nitro: {
        prerender: {
            // keep crawl true so pages still get discovered, but ignore the netlify image proxy
            crawl: true,
            ignore: ['/.netlify/**']
        }
    }

})
