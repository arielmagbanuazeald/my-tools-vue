import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './registerServiceWorker'

import {MdDrawer, MdToolbar, MdButton, MdList, MdIcon, MdContent, MdRadio, MdField} from 'vue-material/dist/components/'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(MdDrawer);
Vue.use(MdToolbar);
Vue.use(MdButton);
Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdContent);
Vue.use(VueRouter);
Vue.use(MdRadio);
Vue.use(MdField);

// TODO: only a workaround
Vue.component('router-link', Vue.options.components.RouterLink);
Vue.component('router-view', Vue.options.components.RouterView);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app')
