<template>
    <span>
        <a class="waves-effect waves-light btn modal-trigger red orange-darken-3" href="#delete">Удалить</a>

        <div ref="modal" id="delete" class="modal">
            <div class="modal-content">
                <h4>Вы точно хотите удалить ссылку???</h4>
                <p><strong>Ссылка: </strong>{{link.link}}</p>
            </div>
            <div class="modal-footer">
                <a class="waves-effect waves-light btn orange darken-3" @click="delete_link">Удалить</a>
                <a href="#" class="modal-close waves-effect waves-green btn-flat">Закрыть</a>
            </div>
        </div>
    </span>
</template>

<script>
export default {
    props: ['link'],
    methods: {
        async delete_link() {
            try {
                await this.$store.dispatch("deleteLink", this.link.id)
                this.$router.push("/")
            } catch (error) {}
        },
    },
    mounted() {
        M.Modal.init(this.$refs.modal)
    }
}
</script>

<style scoped>
    @media (max-width: 700px) {
            h4 {
                font-size: 18px;
            }
        }

    @media (max-width: 400px) {
        h4 {
            font-size: 15px;
        }
        p {
            font-size: 12px;
        }
    }
</style>