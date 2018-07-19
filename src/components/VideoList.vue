<template>
    <ul>
        <VideoListItem v-for="video in videos"></VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    props: {//You have to list out all of the props this component expects to see
        videos: Array //This is the data type that is expected
    }
};

</script>

<style>
</style>

