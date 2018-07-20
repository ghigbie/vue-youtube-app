<template>
    <ul class="col-md-4 list-group">
        <VideoListItem v-for="video in videos"
                       :video="video"
                       :key="video.etag"
                       @videoSelect="onVideoSelect">
        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    methods: {
        onVideoSelect(video){
            this.$emit('videoSelect', video)
        }
    },
    props: {//You have to list out all of the props this component expects to see
        videos: Array //This is the data type that is expected
    }
};

</script>

<style>
</style>

