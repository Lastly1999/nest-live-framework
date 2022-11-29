import flv from "flv.js"

export default defineNuxtPlugin((nuxt) => {
    nuxt.$flv = flv
})