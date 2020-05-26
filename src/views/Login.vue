<template>

    <form class="form" @submit.prevent="submitHandler">
        <h1>Вход на сайт</h1>
        <div class="input-field col s12">
            <input v-model="email" id="email" type="email" class="validate" autocomplete="off" required>
            <label for="email">Почта</label>
            <span class="helper-text" data-error="Это поле должно быть заполнено!"></span>
        </div>

        <div class="input-field col s12">
            <input v-model="password" id="password" type="password" class="validate" required>
            <label for="password">Пароль</label>
            <span class="helper-text" data-error="Это поле должно быть заполнено!"></span>

        </div>

        <button
            class="btn waves-effect waves-light auth-submit blue darken-4"
            type="submit"
            >
            Войти
            <i class="material-icons right">send</i>
        </button>
        
        
        <div class="account-text">
            <strong>Еще нет аккаунта??? </strong>
            <router-link tag="span" class="orange-text text-darken-3" to="/registration">Регистрация</router-link>
        </div>
        
    </form>

</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async submitHandler() {

            const formData = {
                email: this.email,
                password: this.password
            }
            try {
                await this.$store.dispatch("login", formData)
                this.$router.push("/")
            } catch (error) {}
        }
    }
}
</script>

<style scoped>
    form {
        border: 1px solid #ccc;
        border-radius: 20px;
        padding: 40px;
        margin-top: 8rem;

        background-color: whitesmoke;
    }

    .account-text {
        margin-top: 10px;
        font-size: 18px;
    }
</style>