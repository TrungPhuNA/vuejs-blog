import axios from "axios";
import API from './../../api/index';

export default {
    state: {
        menus: [],
        menuDetail : {},
    },
    mutations: {
        setMenus(state, data) {
            state.menus = data;
        },
        setMenuItem( state, data) {
            state.menuDetail =  data;
        }
    },
    getters: {
        listMenus: state => state.menus,
        menuDetail : state => state.menuDetail
    },
    actions: {
        async loadMenus({commit}) {

            let response = await axios.get(API.menu.list);
            console.log(API.menu.list);
            if (response.data)
                commit('setMenus', response.data)
        },

        async getMenuDetail({  commit  }, id) {
            console.log(API.menu.detail + id);
            let response = await axios.get(API.menu.detail  + id);
            if (response.data) {
                commit('setMenuItem', response.data)
            }
        }
    }
}