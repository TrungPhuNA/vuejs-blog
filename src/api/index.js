let api = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:1999/api/' : 'http://support.phupt.net/api/';
export default {
    menu: {
        list: api + 'menus/',
        detail: api + 'menus/'
    },
    article: {
        list: api + 'articles/',
        detail: api + 'articles/',
        menu: api + 'articles/menu/',
        relate: api + 'articles/relate/'
    }
}