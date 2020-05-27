import Vuex from 'vuex';
import Vue from "vue"
import Menus from "./modules/menus";
import Articles from "./modules/article";

Vue.use(Vuex);

export default new Vuex.Store({
    modules :  {
        Menus,
        Articles
    }
})