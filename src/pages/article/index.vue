<template>
    <div class="articles">
        <h1>Danh sách bài viết</h1>
        <Articles :listArticles="listArticles" @nexPage="nexPage"/>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import Articles from  './../../components/Article'

    export default {
        data() {
            return {
                paramsDefault : {
                    page : 1
                }
            }
        },
        components : {
            Articles
        },
        metaInfo: {
            title: 'Danh sách bài viết',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        },
        methods : {
            ...mapActions(["loadArticles"]),
            nexPage(page)
            {
                this.paramsDefault.page = page;
                this.loadArticles(this.paramsDefault);
            }
        },
        computed: mapGetters(["listArticles"]),
        created() {
            this.loadArticles(this.paramsDefault);
        }
    }
</script>

<style lang="scss">

</style>