<template>
    <li class="list-group-item">
        <img class="img-thumbnail"
             :src="thumbnailURL" />
        {{ videoTitle }}
    </li>
</template>

<script>
export default {
   name: 'VideoListItem',
   props: ['video'],
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
