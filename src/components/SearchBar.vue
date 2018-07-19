<template>
    <div>
        <input @input="onInput"/>
    </div>
</template>

<script>
export default {
    name: 'SearchBar', //This needs to be a string!!!
    methods: {
        onInput: function(){
            this.$emit('termChange', event.target.value);
        }
    }
};
</script>

<style>

</style>

