<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoDisplay :video="selectedVideo"></VideoDisplay>
        <VideoList @videoSelect="onVideoSelect"
                   :videos="videos"></VideoList>
    </div>
</template>

<script>
import axios from 'axios'

import SearchBar from './components/SearchBar';
import VideoDisplay from './components/VideoDisplay';
import VideoList from './components/VideoList';

import API_KEY from './apiKey';

export default {
    name: 'App',
    data(){
        return {
            videos: [],
            selectedVideo: null
        };
    },
    components: {
        SearchBar,
        VideoDisplay,
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
        },
        onVideoSelect(video){
            this.selectedVideo = video;
            console.log(selectedVideo);
        }
    }
};
</script>

<style>
</style>
