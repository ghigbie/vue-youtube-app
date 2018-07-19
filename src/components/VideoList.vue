<template>
    <ul>
        VideoList
        <li v-for="video in videos">{{ video.name }}</li>
    </ul>
</template>

<script>
export default {
    name: 'VideoList',
    props: {//You have to list out all of the props this component expects to see
        videos: Array //This is the data type that is expected
    }
};

</script>

<style>
</style>

