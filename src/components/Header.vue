<template>
    <div class="header">
        <router-link :to=" { name: 'page.home'} " class="header-logo">
            <img src="@/assets/logo.png" alt="Logo">
            <span>Document</span>
        </router-link>
        <div class="header-nav">
            <ul>
                <li>
                    <a href="https://www.youtube.com/channel/UCzloMZCKVhxiGKSVH7zJZkA"  target="_blank"><i class="fas fa-youtube" ></i>Youtube</a>
                </li>
                <li>
                    <router-link :to="{ name : 'page.contact'}"><i class="fas fa-envelope-open-o"></i> Gủi liên hệ</router-link>
                </li>
                <li>
                    <router-link :to=" { name: 'page.article'} "><i class="fas fa-pen"></i> Bài viết</router-link>
                </li>
                <li>
                    <router-link :to=" { name: 'page.home'} "><i class="fas fa-home"></i> Trang chủ</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
export default {

}

<style lang="scss">
    .header {
        position: fixed;
        top: 0;
        z-index: 99;
        width: 100%;
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #eaecef;
        background: white;
        &-logo {
            display: flex;
            align-items: center;
            img {
                width: 40px;
                height: 40px;
            }
            span {
                font-size: 20px;
            }
        }
        &-nav {
            flex: 1 1 80%;
            ul {
                display: flex;
                flex-direction: row-reverse;
                li {
                    a {
                        white-space: nowrap;
                        cursor: pointer;
                        padding: 5px 10px;
                        display: block;
                    }
                }
            }
        }
    }
</style>