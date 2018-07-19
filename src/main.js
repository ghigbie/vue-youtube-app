import vue from 'vue';
import App from './App';

new Vue ({
    el: '#app',
    render: h => h(App), //h is an abreviation for createElement
});