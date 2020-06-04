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
            if (localStorage.getItem('menus')) {
                commit('setMenus', JSON.parse(localStorage.getItem('menus')));
                return
            }
            let response = await axios.get(API.menu.list);
            if (response.data)
            {
                localStorage.setItem('menus', JSON.stringify(response.data));
                commit('setMenus', response.data)
            }
        },

        async getMenuDetail({  commit  }, id) {
            let key = 'menus_'+ id;
            if (localStorage.getItem(key)) {
                commit('setMenuItem', JSON.parse(localStorage.getItem(key)));
                return
            }

            console.log(API.menu.detail + id);
            let response = await axios.get(API.menu.detail  + id);
            if (response.data) {
                localStorage.setItem(key, JSON.stringify(response.data));
                commit('setMenuItem', response.data)
            }
        }
    }
}