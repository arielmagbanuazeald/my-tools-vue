<template>


    <div class="md-layout md-gutter">
        <div class="md-layout-item md-size-100">
            <article>
                <p>
                    JSON Lint is a validator and reformatter for JSON, a lightweight data-interchange format.
                    Copy and paste, directly type, or input your JSON code in the editor and let JSONLint validate and format your messy JSON code.
                </p>
            </article>
        </div>

        <div class="md-layout-item md-size-100">
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-100">
                    <md-button class="md-raised md-accent" @click="validate">Validate JSON</md-button>
                </div>
                <div class="md-layout-item md-size-100">
                    <div class="md-layout-item md-size-50">
                        <textarea id="json-textarea"></textarea>
                    </div>

                    <div class="md-layout-item md-size-50">
                        <p id="result-paragraph" class="z-depth-0 blue-grey lighten-4" hidden></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const jsonlint = require('jsonlint');

    export default {
        data () {
            return {}
        },

        methods: {
            validate () {
                let awts = jsonlint.parse('{"creative?": false}');
                console.log($awts);
            }
        }
    }
</script>

<style scoped>

</style>