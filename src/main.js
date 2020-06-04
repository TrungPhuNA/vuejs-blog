import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/index';
import VueProgressBar from 'vue-progressbar'

import VueSweetalert2 from 'vue-sweetalert2';

const optionsVueSweetalert2 = {
    toast: true,
    showConfirmButton: false,
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
    position: 'top-end',
};

Vue.use(VueSweetalert2, optionsVueSweetalert2);

Vue.use(VueProgressBar, {
    color: "rgb(143, 255, 199)",
    failedColor: "red",
    height: "3px"
});

import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
    keyName: 'head'
})

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'sweetalert2';

Vue.config.productionTip = false


import './assets/css/minireset.min.css'

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
