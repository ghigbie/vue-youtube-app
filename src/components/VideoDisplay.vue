<template>
    <div v-if="video">
        <img :src="displayImageURL" />
        <h2>{{ displayTitle }}</h2>
    </div>
</template>

<script>
export default {
    name: 'VideoDisplay',
    props: ['video'],
    computed: {
        displayImageURL(){
            return this.video.snippet.thumbnails.high.url;
        },
        displayTitle(){
            return this.video.snippet.title;
        }
    }
};
</script>

<style scope>
</style>