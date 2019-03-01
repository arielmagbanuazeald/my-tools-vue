import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import {MdDrawer, MdToolbar, MdButton, MdList, MdIcon, MdContent} from 'vue-material/dist/components/'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdDrawer);
Vue.use(MdToolbar);
Vue.use(MdButton);
Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdContent);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app')
