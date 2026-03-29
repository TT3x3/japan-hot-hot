import Vue from 'vue';

Vue.filter('dollarSign', function(value) {
    if (!value) return ''
    return `NT$ ${value}`;
})
Vue.filter('currency', function(value) {
    if (!value) return ''
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})