Vue.component('search', {
    props: ['value'],
    template: `                      
    <input type="text" class="search-field" v-on:input="$emit('input', $event.target.value)">
    `
});