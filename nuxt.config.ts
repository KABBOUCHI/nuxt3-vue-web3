import { defineNuxtConfig } from 'nuxt'
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    ssr: false,

    alias: {
        web3: "web3/dist/web3.min.js",
    },

    buildModules: [
        '@vueuse/nuxt',
    ],

    modules: [
        '@nuxtjs/tailwindcss'
    ],

    //@ts-ignore
    vite: {
        build: {
            rollupOptions: {
                plugins: [
                    rollupNodePolyFill(),
                ],
            },
        },
        optimizeDeps: {
            esbuildOptions: {
                define: {
                    global: "globalThis",
                },

                plugins: [
                    NodeGlobalsPolyfillPlugin({
                        process: true,
                        buffer: true,
                    }),
                ]
            },
        },
    },
})