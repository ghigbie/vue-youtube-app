<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList />
    </div>
</template>

<script>
import axios from 'axios'

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

import API_KEY from './apiKey';

export default {
    name: 'App',
    components: {
        SearchBar,
        VideoList
    },
    methods: {
        onTermChange(searchTerm){
            console.log(searchTerm);
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response => console.log(response));
        }
    }
};
</script>

<style>
</style>
