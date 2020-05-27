import axios from "axios";
import API from './../../api/index';

export default {
    state: {
        articles: [],
        articleByMenuId : [],
        articlesById : null
    },
    mutations: {
        setArticles(state, data) {
            state.articles = data;
        },
        setArticlesDetail(state, data) {
            state.articlesById = data;
        },
        setArticleByMenu(state, data) {
            state.articleByMenuId =  data;
        }
    },
    getters: {
        listArticles: state => state.articles,
        articlesById: state => state.articlesById,
        articlesByMenu: state => state.articleByMenuId
    },
    actions: {
        async loadArticles({commit}, params) {
            let response = await axios.get(API.article.list, {
                params
            });
            console.log(API.article.list);
            if (response.data)
                commit('setArticles', response.data)
        },
        async getArticleByMenuId({commit}, params) {
            console.log(params);
            let response = await axios.get(API.article.menu + params.menuID, {
                params
            });
            console.log(API.article.menu + params.menuID);
            if (response.data)
                commit('setArticleByMenu', response.data)
        },
        async getArticleDetail({commit}, id) {
            let response = await axios.get(API.article.detail  + id);
            if (response.data) {
                commit('setArticlesDetail', response.data)
            }
        }
    }
}