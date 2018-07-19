import vue from 'vue';
import App from './App';

new Vue ({
    render: h => h(App) //h is an abreviation for createElement
}).$mount('#app');