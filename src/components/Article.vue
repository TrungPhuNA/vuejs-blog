<template>
    <div class="list-articles">
        <div class="item" v-for="article in listArticles.data" :key="article.id">
            <div class="item-header">
                <a href=""><i class="fas fa-user"></i>By Admin</a>
            </div>
            <div class="item-content">
                <h3 class="item-title">
                    <router-link  :to=" { name: 'page.article.detail', params : { slug : article.a_slug, id: article.id }} ">{{ article.a_name}}</router-link>
                </h3>
            </div>
            <div class="item-footer">
                <span><i class="fas fa-eye"></i> {{ article.a_view}}</span>
                <span><i class="fas fa-clock"></i>{{ article.created_at}}</span>
            </div>
        </div>
        <div class="paginate">
            <a href="#" v-if="listArticles.prev_page_url" class="btn btn-xs" @click="prevPage"><i class="fas fa-angle-double-left"></i> Trang trước</a>
            <a href="#" v-if="listArticles.next_page_url" class="btn btn-xs"  @click="nextPage">Trang sau <i class="fas fa-angle-double-right"></i></a>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            listArticles : {}
        },
        data() {
            return {
                page : 1
            }
        },
        created() {

        },
        methods : {
            prevPage() {

            },
            nextPage()
            {
                this.$emit('nexPage', this.page++)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-articles {
        .item {
            margin: 5px 0;
            padding: 10px 0;
            border-bottom: 1px solid #dedede;
            &-footer {
                display: flex;
                span {
                    margin-right: 10px;
                }
            }
            &:last-child{
                border-bottom: 0;
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
    .paginate {
        display: flex;
        justify-content: center;
        margin: 15px 0;
        a {
            color: white;
            background: #e91e63;
            border-radius: 20px;
            padding: 10px 25px!important;
            border: 1px solid transparent;
            display: inline-block;
            font-size: 14px;
            font-weight: 400;
            letter-spacing: .3px;
            line-height: 20px;
            text-align: center;
            transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            vertical-align: middle;
            white-space: nowrap;
            transform: translateZ(0);
            position: relative;
            svg {
                margin-top: -7px;
            }
            &:last-child{
                margin-left: 10px;
            }
            &:before {
                transform: scaleX(0);
                content: "";
                border-radius: 45px;
                position: absolute;
                z-index: -1;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0,0,0,.04);
                transform-origin: 50%;
                transition: all .5s ease-out;
            }
            &:hover:before {
                transform: scaleX(1);
            }
        }
    }
</style>