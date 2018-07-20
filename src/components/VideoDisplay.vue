<template>
    <div v-if="video">
        <img :src="displayImgURL" />
        <h2>{{ video.snippet.title }}</h2>
    </div>
</template>

<script>
export default {
    name: 'VideoDisplay',
    props: ['video']
};
</script>

<style scope>
</style>