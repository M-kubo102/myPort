<template>
    <div class="content">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
export default {
    props: ["title"]
}
</script>

<style>
    .content{
        color: #333;
        text-align: center;
        padding: 20px;
        width: 800px;
        margin: 10px auto;
    }
</style>