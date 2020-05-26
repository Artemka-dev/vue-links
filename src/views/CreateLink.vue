<template>
    <div class="container">
        <h1>Создать ссылку</h1>
        <select ref="select" v-model="protocol">
            <option value="" disabled selected>Выбрать протокол</option>
            <option value="http">http</option>
            <option value="https">https</option>
        </select>
        <label>Выбрать протокол</label>

        <br/><br/>

        <form @submit.prevent="submitHandler">
            <div class="input-field">
                <input v-model="link" id="link" type="text" class="validate" autocomplete="off" required>
                <label for="link">Ссылка</label>
                <span class="helper-text" data-error="Это поле должно быть заполнено!"></span>
            </div>

            <div class="input-field">
                <textarea v-model="description" id="desc" class="materialize-textarea" required></textarea>
                <label for="desc">Описание</label>
            </div>

            <button class="btn waves-effect waves-light light-blue darken-4" type="submit" name="action">Создать
                <i class="material-icons right">send</i>
            </button>
        </form>
    </div>
</template>

<script>
const shortid = require("shortid")
import { mapMutations } from "vuex"

export default {
    data() {
        return {
            link: "",
            description: "",
            error_message: "",
            protocol: ""
        }
    },
    watch: {
        protocol(value) {
            // this.link = value === "http" ? "http://" : "https://"
            this.link = value + "://"

            setTimeout(() => {
                M.updateTextFields() 
            }, 0)
        }
    },
    mounted() {
        M.FormSelect.init(this.$refs.select)


        setTimeout(() => {
           M.updateTextFields() 
        }, 0)
    },
    methods: {
        async submitHandler() {
            if (this.link && this.description && this.link.includes("http")) {
                const code = shortid.generate()

                try {
                    const link = await this.$store.dispatch("createLink", {
                        shortLink: "http://localhost:5000/link/" + code,
                        link: this.link,
                        description: this.description,
                        slugify: code + "_" + this.description.split(" ")[0],
                        clicks: 0
                    })

                    this.link = ""
                    this.description = ""

                    this.$router.push("/")
                } catch (error) {}

            } else {
                // localStorage.clear()
                this.error_message = "Не удалось создать ссылку"
                M.toast({html: this.error_message})
            }
            
        }
    }
}
</script>