<template>
    <div class="page-home">
        <h1>Đây là trang chủ</h1>
        <Articles :listArticles="listArticles" @nexPage="nexPage"/>
    </div>
</template>

<script>
    import Articles from  './../../components/Article'
    import { mapActions, mapGetters } from 'vuex'
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
            title: 'Trang chủ',
            htmlAttrs: {
                lang: 'vi',
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