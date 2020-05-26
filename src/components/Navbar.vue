<template>
    <div>
        <nav class="blue darken-3">
        <div class="nav-wrapper">
            <router-link tag="a" class="brand-logo" to="/">Ссылки</router-link>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li>
                    <router-link tag="a" to="/create-link">Создать ссылку</router-link>
                </li>
                <li>
                    <router-link tag="a" to="/">Все ссылки</router-link>
                </li>
                <li>
                    <a href="#" @click="logout">Выйти</a>
                </li>
            </ul>
        </div>
        </nav>

        <ul class="sidenav" id="mobile-demo" ref="sidenav">
            <li>
                <router-link tag="a" to="/create-link">Создать ссылку</router-link>
            </li>
            <li>
                <router-link tag="a" to="/">Все ссылки</router-link>
            </li>
            <li>
                <a href="#" @click="logout">Выйти</a>
            </li>
        </ul>

    </div>
</template>

<script>
import messages from "../utils/messages"

export default {
    mounted() {
        M.Sidenav.init(this.$refs.sidenav)
    },
    methods: {
        async logout() {
            const instance = M.Sidenav.getInstance(this.$refs.sidenav)
            instance.close()

            await this.$store.dispatch("logout")
            this.$router.push("/login")
            
            this.$message(messages['logout'])
        }
    }

}
</script>

<style scoped>
    nav {
        padding: 0 2rem;
    }
</style>