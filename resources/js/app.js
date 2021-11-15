/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('image-modal', require('./components/ImageModal.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 window.Event= new Vue();

const app = new Vue({
    el: '#app',
    data: {
        baseUrl: 'https://api.unsplash.com',
        keyword: '',
        clientId: 'btdIQnBhRks7RmkZmZ9WQxzU_klAerM62u_yKfQprMg',

        results: [],
        defaultRes: [],
        showModal: false,
        imgLink: '',
        imgDownload: '',
    },

    methods: {
        SearchImage(){
            this.defaultRes= [];
            axios.get(`${this.baseUrl}/search/photos?client_id=${this.clientId}&query=${this.keyword}`)
                .then(response => {
                    console.log(response);
                    this.results= response.data.results;
                })
                .catch(error => {
                    console.log(error);
                })
        },

        searchDefault(){
            axios.get(`${this.baseUrl}/search/photos?client_id=${this.clientId}&query=woods`)
                .then(response => {
                    console.log(response);
                    this.defaultRes= response.data.results;
                })
                .catch(error => {
                    console.log(error);
                })
        },

        modalShow(link, download){
            this.imgLink= link;
            this.imgDownload= download;
            this.showModal= true;
        },

        modalHide(){
            console.log('hiding');
            this.showModal= false;
        }
    },

    mounted(){
        this.searchDefault();
    },

    created(){
        Event.$on('hideModal', this.modalHide)
    }
});
