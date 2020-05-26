<template>
  <div>
    <Navbar />
    
    <router-view />
  </div>
</template>

<script>
import Navbar from "../components/Navbar"
import messages from "../utils/messages"

export default {
    components: {Navbar},
    computed: {
        error() {
            return this.$store.getters.getError
        }
    },
    watch: {
        error(firebase_error) {
            this.$message(messages[firebase_error.code] || "Что-то пошло не так")
        }
    }
}
</script>