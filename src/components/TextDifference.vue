<template>
    <div class="md-layout md-gutter">
        <div class="md-layout-item md-size-100">
            <article>
                Compare two different group of texts or code line by line.
                Copy and paste the original code in the left and the other one on the right and click compare.
            </article>
        </div>

        <div class="md-layout-item md-size-100">
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-100">
                    <md-radio v-model="comparisonStyle" value="side-by-side">Side by Side</md-radio>
                    <md-radio v-model="comparisonStyle" value="inline">Inline</md-radio>
                    <md-button class="md-raised md-accent" @click="compare">Accent</md-button>
                </div>

                <div class="md-layout-item md-size-100">
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-size-50">
                            <md-field>
                                <label>Base Text</label>
                                <md-textarea v-model="baseText" md-autogrow></md-textarea>
                            </md-field>
                        </div>

                        <div class="md-layout-item md-size-50">
                            <md-field>
                                <label>New Text</label>
                                <md-textarea v-model="newText" md-autogrow></md-textarea>
                            </md-field>
                        </div>
                    </div>
                </div>

                <div class="md-layout-item md-size-100">
                    <div id="diffoutput">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as diffview from '../js/diffview'
    import * as difflib from '../js/difflib'

    export default {
        data() {
            return {
                comparisonStyle: 'side-by-side',
                baseText: '',
                newText: ''
            }
        },

        methods: {
            compare() {
                // alert(this.comparisonStyle);

                console.log(diffview);
                console.log(difflib);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~vue-material/dist/theme/engine";

    .md-layout-item {
        article {
            height: 65px;
        }
    }

    /*
    .md-layout {
        padding-left: 256px;
        padding-right: 256px;
    }
    */

    /*
    .md-layout-item {
        height: 40px;

        &:nth-child(1) {
            background: md-get-palette-color(grey, 300);
        }

        &:nth-child(2) {
            background: md-get-palette-color(grey, 400);
        }

        &:nth-child(3) {
            background: md-get-palette-color(grey, 500);
        }
    }
    */
</style>