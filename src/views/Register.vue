<template>

    <form class="form" @submit.prevent="submitHandler">
        <h1 class="text">Регистрация на сайт</h1>
        <div class="input-field col s12">
            <input v-model="name" id="name" type="text" class="validate" autocomplete="off" required>
            <label for="name">Имя пользователя</label>
            <span class="helper-text" data-error="Это поле должно быть заполнено!"></span>
        </div>

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
            Зарегестрироваться
            <i class="material-icons right">send</i>
        </button>

        <div class="account-text">
            <strong>Уже есть аккаунт??? </strong>
            <router-link tag="span" class="orange-text text-darken-3" to="/login">Войти</router-link>
        </div>
        
    </form>

</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async submitHandler() {
            const formData = {
                name: this.name,
                email: this.email,
                password: this.password
            }

            try {
                await this.$store.dispatch("register", formData)
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

    @media (max-width: 800px) {
        .text {
            font-size: 30px;
        }
    }
</style>