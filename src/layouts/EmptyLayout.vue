<template>
    <div class="container">
        <router-view />
    </div>
</template>

<script>
import messages from "../utils/messages"

export default {
    computed: {
        error() {
            return this.$store.getters.getError
        }
    },
    watch: {
        error(firebase_error) {
            // console.log(firebase_error)
            this.$message(messages[firebase_error.code] || "Что-то пошло не так")
        }
    }
}
</script>