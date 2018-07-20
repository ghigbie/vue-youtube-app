<template>
    <li class="list-group-item media"
        @click="onVideoSelect">
        <img class="mr-3"
             :src="thumbnailURL" />
        <div class="media-body">
            {{ videoTitle }}
        </div>
    </li>
</template>

<script>
export default {
   name: 'VideoListItem',
   props: ['video'],
   methods: {
       onVideoSelect(){
           this.$emit('videoSelect', this.video);
       }
   },
   computed: {
       thumbnailURL() {
           return this.video.snippet.thumbnails.default.url;
       },
       videoTitle() {
           return this.video.snippet.title;
       }
   }
};
</script>


<style scoped>
    li{
        display: flex;
        cursor: pointer;
    }

    li:hover{
        background-color: #eee;
    }
</style>