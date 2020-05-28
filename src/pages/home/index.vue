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
        metaInfo() {
            return {
                title: "Epiloge - Build your network in your field of interest",
                meta: [
                    { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
                    { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
                    { property: 'og:site_name', content: 'Epiloge'},
                    {property: 'og:type', content: 'website'},
                    {name: 'robots', content: 'index,follow'}
                ]
            }
        },

        components : {
            Articles
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