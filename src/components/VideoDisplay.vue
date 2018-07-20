<template>
    <div class="col-md-8"
         v-if="video">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" 
                    :src="videoURL" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
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
        videoURL(){
            const { videoId } = this.video.id;
            return `https://www.youtube.com/embed/${videoId}`;
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