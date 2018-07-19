<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList :videos="videos"> </VideoList>
    </div>
</template>

<script>
import axios from 'axios'

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

import API_KEY from './apiKey';

export default {
    name: 'App',
    data(){
        return {
            videos: []
        };
    },
    components: {
        SearchBar,
        VideoList
    },
    methods: {
        onTermChange(searchTerm){
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response => {
                this.videos = response.data.items;
            });
        }
    }
};
</script>

<style>
</style>
