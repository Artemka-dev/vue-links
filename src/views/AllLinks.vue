<template>
<div>
    <div v-if="!loading">
        <div class="table" v-if="links.length">
            <h1>Все ссылки</h1>
            <table class="highlight responsive-table">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Оригинальная</th>
                    <th>Сокращенная</th>
                    <th>Краткое описание</th>
                    <th>Действия</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(item, index) of links" :key="item.id">
                    <td>{{index + 1}}</td>
                    <td class="td"><div class="text">{{item.link}}</div></td>
                    <td class="td"><div class="text">{{item.shortLink}}</div></td>
                    <td class="desc"><div class="text">{{item.description}}</div></td>
                    <td>
                        <router-link tag="a" class="waves-effect waves-light btn indigo darken-2" :to="'/link/' + item.slugify">Открыть</router-link>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-else>
            <h6 class="no-links">У вас пока нет ссылок</h6>
            <router-link tag="h6" class="link" to="/create-link">Создать</router-link>
        </div>

        <div class="new-table">
            <div class="row" v-for="item of links" :key="item.id">
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <div class="title"><span class="card-title text">{{item.description}}</span></div>
                        <span class="desc"><div class="text"><strong>Оригинальная ссылка:</strong> {{item.link}}</div></span>
                        <span class="desc"><div class="text"><strong>Сокращенная ссылка:</strong> {{item.shortLink}}</div></span>
                    </div>
                    <div class="card-action">
                        <router-link tag="a" :to="'/link/' + item.slugify">Открыть</router-link>                </div>
                </div>
                </div>
            </div>
    
        </div>
    </div>

    <div v-else>
        <Loader />
    </div>
    
</div>
</template>

<script>
import Loader from "../components/Loader"

export default {
    data() {
        return {
            links: [],
            loading: true
        }
    },
    components: {Loader},
    async mounted() {
        this.links = await this.$store.dispatch("getAllLinks")
        this.loading = false
    }
};
</script>

<style scoped>
    .table {
        margin: 0 5rem;
    }

    .td {
        max-width: 400px;
    }

    .desc {
        max-width: 200px;
    }

    .title {
        max-width: 300px;
    }

    .text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .no-links {
        font-weight: bold;
        text-align: center;
        margin-top: 30px;
        font-size: 25px;
    }

    .link {
        text-align: center;
        font-size: 16px;
    }

    .new-table {
        display: none;
    }

    @media (max-width: 600px) {
        .new-table {
            display: block;
        }
        table {
            display: none;
        }
    }

    .switch {
        margin-top: 30px;
        text-align: center;
    }
</style>