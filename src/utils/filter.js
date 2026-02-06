import Vue from 'vue';

Vue.filter('numberFilter', function(value) {
    if (!value) return ''
    return 'NT$ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})