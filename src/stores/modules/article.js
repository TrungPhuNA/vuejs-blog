import axios from "axios";
import API from './../../api/index';

export default {
    state: {
        articles: [],
        articleByMenuId : [],
        articlesById : null,
        articlesRelate : {},
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
        },
        setArticlesRelate(state, data) {
            state.articlesRelate =  data;
        },
    },
    getters: {
        listArticles: state => state.articles,
        articlesById: state => state.articlesById,
        articlesByMenu: state => state.articleByMenuId,
        articlesRelate : state => state.articlesRelate
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
            let response = await axios.get(API.article.menu + params.menuID, {
                params
            });
            console.log(API.article.menu + params.menuID);
            if (response.data)
                commit('setArticleByMenu', response.data)
        },
        async getArticleDetail({commit}, id) {
            console.log(API.article.detail + id);
            let response = await axios.get(API.article.detail  + id);
            if (response.data) {
                commit('setArticlesDetail', response.data)
            }
        },

        async getArticleRelate({commit}, id) {
            console.log(API.article.relate + id);
            let response = await axios.get(API.article.relate  + id);
            if (response.data) {
                commit('setArticlesRelate', response.data)
            }
        }
    }
}