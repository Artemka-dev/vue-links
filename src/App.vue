<template>
    <div id="app">
        <component :is="layout">
           <router-view /> 
        </component>
        
    </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout"
import MainLayout from "@/layouts/MainLayout"

export default {
    name: "App",
    components: {EmptyLayout, MainLayout},
    computed: {
        layout() {
            return (this.$route.meta.layout || "main") + "-layout"
        }
    }
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";

@media (max-width: 700px) {
    h1 {
        font-size: 40px;
    }
}

@media (max-width: 350px) {
    h1 {
        font-size: 30px;
    }
}
</style>
