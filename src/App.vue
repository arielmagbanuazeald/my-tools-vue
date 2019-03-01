<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

        <div class="page-container md-layout-column">
            <md-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="showNavigation = true">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">My Title</span>

                <div class="md-toolbar-section-end">
                    <md-button @click="showSidepanel = true">Favorites</md-button>
                </div>
            </md-toolbar>

            <md-drawer :md-active.sync="showNavigation">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span class="md-title">My App name</span>
                </md-toolbar>

                <md-list>
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>
                        <router-link to="/" exact>
                            <span class="md-list-item-text"><a>Text Difference</a></span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon>
                        <router-link to="/ipsum-generator" exact>
                            <span class="md-list-item-text"><a>Ipsum Generator</a></span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon>
                        <router-link to="/json-lint" exact>
                            <span class="md-list-item-text"><a>JSON Lint</a></span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon>
                        <router-link to="/css-lint" exact>
                            <span class="md-list-item-text"><a>Css Lint</a></span>
                        </router-link>
                    </md-list-item>

                    <!--
                    <md-list-item>
                        <md-icon>delete</md-icon>
                        <span class="md-list-item-text">Trash</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>error</md-icon>
                        <span class="md-list-item-text">Spam</span>
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

<style lang="scss" scoped>
    .page-container {
        min-height: 100vh;
        overflow: hidden;
        position: relative;
        border: 1px solid rgba(#000, .12);
    }

    // Demo purposes only
    .md-drawer {
        width: 300px;
        max-width: calc(100vw - 125px);
    }

    .md-content {
        padding: 16px;
        height: 100%;
    }
</style>
