import Vue from 'vue';
import App from './App';
import store from './store';

new Vue ({
    store, //Use ES6 destructuring syntax to pass in store
    render: h => h(App) //h is an abreviation for createElement
}).$mount('#app');