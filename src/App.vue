<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
    </div>
</template>

<script>
import axios from 'axios'

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
            axios.get('http://googleapis.com/youtube/v3/search', {
                key: API_KEY,
                type: 'video',
                part: 'snippet',
                q: searchTerm
            }).then(response => console.log(response));
        }
    }
};
</script>

<style>
</style>
