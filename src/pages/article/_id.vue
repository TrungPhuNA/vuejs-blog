<template>
    <div class="article-detail">
        <h1>{{ articlesById ?  articlesById.a_name : '' }}</h1>
        <div class="content" v-html="articlesById ?  articlesById.a_content : ''"></div>
        <h2 class="title-heading-h2">Bài viết liên quan</h2>
        <div class="articles-ralate">
            <div class="list">
                <div class="item" v-for="article in articlesRelate" :key="article.id">
                    <h3 class="item-title">
                        <router-link  :to=" { name: 'page.article.detail', params : { slug : article.a_slug, id: article.id }} ">{{ article.a_name}}</router-link>
                    </h3>
                    <p class=""><a href="#">By Admin</a></p>
                    <div class="item-footer">
                        <span><i class="fas fa-eye"></i> {{ article.a_view}}</span>
                        <span><i class="fas fa-clock"></i>{{ article.created_at}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        data() {
            return {

            }
        },
        methods : {
            ...mapActions(["getArticleDetail","getArticleRelate"]),

        },

        computed: {
            ...mapGetters(["articlesById","articlesRelate"]),
            getArticlesById() {
                return this.articlesById;
            }
        },
        watch : {
            getArticlesById : {
                immediate: true,
                handler: function (data) {
                    if (data != null) {
                        this.getArticleRelate(data.a_menu_id)
                    }
                },
                deep: true
            }
        },
        created() {
            console.log(this.$route.params.id);
            this.getArticleDetail(this.$route.params.id);
        },

        mounted(){

        }
    }
</script>

<style lang="scss"  scoped>
    .title-heading {
        &-h2 {
            font-size: 22px;
            font-weight: 500;
            margin: 15px 0;
        }
    }
    .article-detail {
        max-width: 70%;
    }
    .articles-ralate {
        .list {
            display: flex;
            flex-wrap: wrap;
            .item {
                padding: 10px;
                flex:  0 0 32%;
                box-shadow: 0 0 15px rgba(0,0,0,.1);
                margin-right: 10px;
                margin-bottom: 10px;
                &-footer {
                    display: flex;
                    span {
                        margin-right: 10px;
                    }
                }
                a {
                    color: #5488c7;
                    font-size: 14px;
                }
                svg {
                    font-size: 14px;
                    color: #9b9b9b;
                    margin-right: 5px;
                }
                &-title {
                    margin: 5px 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    a {
                        font-size: 20px;
                        color: #292b2c;
                        &:hover {
                            color: #5488c7;
                        }
                    }
                }
            }
        }
    }
</style>