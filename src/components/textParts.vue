<template>
    <div class="textArea">
        <h3>{{title}}</h3>
        <p>{{text}}</p>
    </div>    
</template>

<script>
export default {
    props:['title', 'text']
}
</script>

<style>
    .textArea{
        border-bottom: 1px dashed #96aa98;
        padding: 10px;
        margin: 10px;
    }

    .textArea h3,
    .textArea p{
        margin: 10px;
    }
</style>