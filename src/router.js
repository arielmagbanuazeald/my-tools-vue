import VueRouter from 'vue-router'
import TextDifference from './components/TextDifference'
import IpsumGenerator from './components/IpsumGenerator'
import JsonLint from './components/JsonLint'
import CssLint from './components/CssLint'


let routes = [
    {
        path: '/',
        component: TextDifference
    },
    {
        path: '/ipsum-generator',
        component: IpsumGenerator
    },
    {
        path: '/json-lint',
        component: JsonLint
    },
    {
        path: '/css-lint',
        component: CssLint
    }
];

export default new VueRouter({
    routes,
    // linkActiveClass: 'is-active'
    // mode: 'history'
});
