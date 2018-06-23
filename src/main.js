import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import 'animate.css';
import 'fullpage-vue/src/fullpage.css';
import VueFullpage from 'fullpage-vue';
import Footer from "./components/Footer.vue";

Vue.use(VueCarousel);
Vue.use(VueFullpage);
Vue.use(Footer);


new Vue({
    el: '#app',
    render: h => h(App)
})
