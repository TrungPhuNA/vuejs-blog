import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/index';

import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
    keyName: 'head'
})

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false


import './assets/css/minireset.min.css'

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
