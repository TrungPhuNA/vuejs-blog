<template>
    <div class="main-left">
        <ul class="menu-first">
            <li v-for="menu in listMenus" :key="menu.id">
                <router-link  :to=" { name: 'page.menu.item', params : { slug : menu.mn_slug, id : menu.id }} ">{{ menu.mn_name}}</router-link>
                <ul v-if="menu.children" class="sub-menu">
                    <li v-for="item in menu.children" :key="item.id">
                        <router-link  :to=" { name: 'page.menu.item', params : { slug : item.mn_slug, id : item.id }} ">{{ item.mn_name}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        methods : {
            ...mapActions(["loadMenus"]),
        },
        computed: mapGetters(["listMenus"]),
        created() {
            this.loadMenus();
        }
    }
</script>

<style lang="scss">
    .main-left {
        padding: 15px;
        box-sizing: border-box;
        border-right: 1px solid #eaecef;
        .menu-first {
            position: sticky;
            position: -webkit-sticky;
            top: 70px;
        }
        ul {
            li {
                a {
                    display: inline-block;
                    padding: 4px 10px;
                }
                a.router-link-active {
                    font-weight: 600;
                    color: #42b983;
                }
                .link-first {
                    font-weight: 500;
                }
            }
            .sub-menu {
                padding-left: 20px;
                li {
                    a {
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>