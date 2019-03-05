<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <div class="page-container md-layout-column">
            <md-toolbar>
                <md-button class="md-icon-button" @click="showNavigation = true">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">My Title</span>
            </md-toolbar>

            <md-drawer :md-active.sync="showNavigation">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span class="md-title">My App name</span>
                </md-toolbar>

                <md-list>
                    <md-list-item to="/" exact>Text Difference</md-list-item>
                    <md-list-item to="/ipsum-generator" exact>Ipsum Generator</md-list-item>
                    <md-list-item to="/json-lint" exact>JSON Lint</md-list-item>
                    <md-list-item to="/css-lint" exact>CSS Lint</md-list-item>

                    <!--
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>
                        <router-link to="/" exact>
                            <a><span class="md-list-item-text">Text Difference</span></a>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon>
                        <router-link to="/ipsum-generator" exact>
                            <a><span class="md-list-item-text">Ipsum Generator</span></a>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon>
                        <router-link to="/json-lint" exact>
                            <a><span class="md-list-item-text">JSON Lint</span></a>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon>
                        <router-link to="/css-lint" exact>
                            <a><span class="md-list-item-text">Css Lint</span></a>
                        </router-link>
                    </md-list-item>
                    -->
                </md-list>
            </md-drawer>
            <md-content>
                <router-view></router-view>
            </md-content>
        </div>
    </div>
</template>

<script>
    import router from './router'

    export default {
        name: 'app',
        router,
        data() {
            return {
                showNavigation: false,
                showSidepanel: false
            }
        },

        components: {

        }
    }
</script>

<style lang="scss">
    @import "~vue-material/dist/theme/engine";

    // mixins
    @mixin main-route-list-active-styling() {
        div.md-list-item-content{
            color: #FFFFFF;
            font-size: 18px;
            font-weight: bold;
        }
    }

    #app {
        height: 100vh;
    }

    .page-container {
        min-height: 100vh;
        overflow: hidden;
        position: relative;
        /*border: 1px solid rgba(#000, .12);*/
    }

    .md-drawer {
        width: 300px;
        max-width: calc(100vw - 125px);
    }

    .md-content {
        margin-top: 64px;
        margin-bottom: 64px;
        margin-left: 128px;
        margin-right: 128px;
        padding: 16px;
        height: 100vh;
    }

    a.md-list-item-router.tool-item-exact-active {
        @include main-route-list-active-styling()
    }

    a.md-list-item-router.tool-item-active {
        @include main-route-list-active-styling()
    }


    // this is for text difference
    table.diff {
        width: 100%;
        color: #000000;

        th.author{
            display: none;
        }

        /*
        tbody {
            tr th:nth-child(odd) {
                width: 20px;
            }
        }
        */
    }
</style>
