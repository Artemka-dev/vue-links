<template>
<div>
    <div class="container block" v-if="!loading">
        <!-- chevron_left -->
        <i class="material-icons icon" @click="$router.push('/')">chevron_left</i>

        <h1>Ссылка</h1>
        <div>
            <div><span class="bold-text">Сокращенная ссылка:</span> <a @click="clickOn" target="_blank">{{link.shortLink}}</a></div>
            <div><span class="bold-text">Оригинальная ссылка:</span> <span>{{link.link}}</span></div>  
            <div><span class="bold-text">Описание:</span> <span>{{link.description}}</span></div>

            <div><span class="bold-text">Переходов на страницу:</span> <span>{{link.clicks}}</span></div>

            <br>

            <a class="waves-effect waves-light btn green darken-2" @click="showForm = !showForm">{{getText}}</a>
            <Modal :link="link" />

            <br><br>
            

            <FormEdit :link="link" v-if="showForm" @updated="updateLink" />

        </div>
    </div>

    <div v-else>
        <Loader />
    </div>
</div>
</template>

<script>
import { mapMutations } from "vuex"
import FormEdit from "../components/FormEdit" 
import Loader from "../components/Loader"
import Modal from "../components/Modal"

export default {
    computed: {
        getText() {
            return this.showForm === false ? "изменить" : "скрыть"
        }
    },
    data() {
        return {
            showForm: false,
            text_button: "изменить",
            link: [],
            loading: true,
            modal: null
        }
    },
    async mounted() {
        this.link = await this.$store.dispatch("getLink", this.$route.params.slug)
        this.loading = false
    },
    components: {FormEdit, Loader, Modal},
    methods: {
        ...mapMutations(['mutateLink']),
        async clickOn() {
            window.open(this.link.link, "_blank")
            this.link.clicks += 1

            try {
                await this.$store.dispatch("updateClick", {
                    id: this.link.id, 
                    clicks: this.link.clicks
                })
            } catch (error) {}
            
        },
        updateLink(link) {
            Object.keys(link).map(element => this.link[element] = link[element])
            this.showForm = false
        }
    },
}
</script>

<style scoped>
    .bold-text {
        font-weight: bold
    }

    .block {
        font-size: 17px;
        line-height: 2.2;
    }

    a {
        margin-right: 20px;
    }

    .icon {
        margin-top: 30px;
        font-size: 50px;
        margin-bottom: 0;
        padding: 0;

        transform: translateX(-30%)
    }

    h1 {
        margin-top: 0;
    }
</style>