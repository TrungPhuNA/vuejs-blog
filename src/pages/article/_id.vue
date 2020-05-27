<template>
    <div class="article-detail">
        <h1>{{ articlesById ?  articlesById.a_name : '' }}</h1>
        <div class="content" v-html="articlesById ?  articlesById.a_content : ''"></div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        methods : {
            ...mapActions(["getArticleDetail"]),
        },

        computed: mapGetters(["articlesById"]),

        created() {
            this.getArticleDetail(this.$route.params.id);
        },

        mounted(){

        }
    }
</script>

<style lang="scss"  scoped>
    .article-detail {
        max-width: 70%;
    }
</style>