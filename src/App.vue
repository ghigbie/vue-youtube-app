<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import API_KEY from './apiKey';

export default {
    name: 'App',
    components: {
        SearchBar
    },
    methods: {
        onTermChange(searchTerm){
            console.log(searchTerm);
        }
    }
};
</script>

<style>
</style>
