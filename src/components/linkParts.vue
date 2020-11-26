<template>
    <div class="textArea">
        <a :href="url">・{{title}}</a>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    props:['title', 'text', 'url']
    
}
</script>

<style>
    .textArea a{
        font-weight: bold;
        margin: 10px;
        font-size: 17px;
        color: #3c6d9e;
    }

    .textArea a:hover{
        color: #80addb;
    }
</style>