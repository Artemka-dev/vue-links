<template>

    <form @submit.prevent="submitHandler">
        <div class="input-field">
            <input v-model="simple_link" id="link" type="text" class="validate" autocomplete="off" required>
            <label for="link">Ссылка</label>
            <span class="helper-text" data-error="Это поле должно быть заполнено!"></span>
        </div>

        <div class="input-field">
            <textarea v-model="description" id="desc" class="materialize-textarea" required></textarea>
            <label for="desc">Описание</label>
        </div>

        <button class="btn waves-effect waves-light light-blue darken-4" type="submit">Изменить
            <i class="material-icons right">send</i>
        </button>
    </form>

</template>

<script>
import { mapMutations } from "vuex"
import messages from "../utils/messages"

export default {
    props: ['link'],
    data() {
        return {
            simple_link: "",
            description: ""
        }
    },
    methods: {
        async submitHandler() {
            try {
                const data = {
                    id: this.link.id,
                    slugify: this.link.slugify,
                    description: this.description,
                    link: this.simple_link
                }
                await this.$store.dispatch("updateLink", data)

                this.$message(messages['updated'])
                this.$emit("updated", data)
            } catch (error) {}
        }
    },
    mounted() {
        this.simple_link = this.link.link
        this.description = this.link.description

       
        setTimeout(() => {
            M.updateTextFields()  
        }, 0)
    }
}
</script>