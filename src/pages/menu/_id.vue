<template>
    <div class="menu-list">
        <h1>{{ menuDetail.mn_name }} </h1>
        <div class="content" v-html="menuDetail.mn_content"></div>
        <Articles :listArticles="articlesByMenu" @nexPage="nexPage"/>
    </div>
</template>

<script>
    import Articles from  './../../components/Article'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                paramsDefault : {
                    page : 1,
                    menuID : this.$route.params.id
                }
            }
        },

        components: {
            Articles
        },

        metaInfo: {
            title: 'Danh mục bài viết',
            htmlAttrs: {
                lang: 'vi',
                amp: true
            }
        },

        methods: {
            ...mapActions(["getMenuDetail","getArticleByMenuId"]),
            nexPage(page)
            {
                this.paramsDefault.page = page;
                this.getArticleByMenuId(this.paramsDefault);
            }
        },

        watch: {
            '$route.path': {
                handler: function () {
                    this.paramsDefault.menuID = this.$route.params.id;
                    this.getMenuDetail(this.$route.params.id);
                    this.getArticleByMenuId(this.paramsDefault);
                },
                deep: true
            }
        },

        computed: mapGetters(["menuDetail","articlesByMenu"]),

        created() {
            this.getMenuDetail(this.$route.params.id);
            this.getArticleByMenuId(this.paramsDefault);
        },

    }
</script>