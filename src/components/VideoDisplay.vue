<template>
    <div v-if="video">
        <img :src="displayImageURL" />
        <div class="details">
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

<style scoped>
.details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>