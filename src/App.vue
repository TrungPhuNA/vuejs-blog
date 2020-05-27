<template>
    <div class="wrapper">
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
        <Header />
        <div id="main" class="main">
            <Sidebar />
            <div class="main-right">
                <div class="main-content">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Sidebar from './components/Sidebar'
    export default {
        components: {
            Header,
            Sidebar
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    body {
        font-family: 'Source Sans Pro', sans-serif;
    }
    a {
        color: #304455;
        text-decoration: none;
    }
    h1 {
        font-size: 25px !important;
        color: #212121;
        margin-bottom: 10px !important;
    }
    .main {
        display: flex;
        margin-top: 70px;
        &-left {
            flex: 1 1 20%;
        }
        &-right {
            flex: 1 1 80%;
            margin-left: 20px;
            padding: 10px;
            display: flex;
        }
        &-content {
            flex: 0 0 80%;
        }
    }

    // content
    .content {
        color: #1b1b1b;
        font-weight: 400;
        p {
            margin-bottom: 10px;
            line-height: 1.5rem;
        }
        blockquote {
            position: relative;
            border-left-color: #f66;
            &:before {
                content: "!";
                background-color: #f66;
                position: absolute;
                top: 14px;
                left: -12px;
                color: #fff;
                width: 20px;
                height: 20px;
                border-radius: 100%;
                text-align: center;
                line-height: 20px;
                font-weight: bold;
                font-size: 14px;
            }
            padding: 12px 24px 12px 30px;
            margin: 2em 0;
            border-left-width: 4px;
            border-left-style: solid;
            background-color: #f8f8f8;
            position: relative;
            border-bottom-right-radius: 2px;
            border-top-right-radius: 2px;
            p {

            }
        }
        pre {
            overflow-x: auto;
            background-color: #f8f8f8;
            border-radius: 2px;
            position: relative;
            padding: 10px;
        }
        ol, ul {
            margin-left: 20px;
            li {
                margin-bottom: 0.5rem;
                line-height: 1.5rem;
            }
        }
    }
</style>