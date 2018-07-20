<template>
    <div v-if="video">
        <img :src="displayImageURL" />
        <div class="detail">
            <h4>{{ displayTitle }}</h4>
            <p>{{ displayDescription }}</p>
        </div>
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
        },
        displayDescription(){
            return this.video.snippet.description
        }
    }
};
</script>

<style scope>
</style>