<template>
    <li><a href="/about" class="btn"><span class="btn-text">{{menu}}</span></a></li>
</template>

<script>
export default {
    props: ["menu"],
}
</script>

<style>
    a{
        display: block;  
        text-decoration: none;     
    }

    .btn{
        width: 120px;
        line-height: 64px;
        text-align: center;
        position: relative;
        display: flex;
    }

    .btn-text{
        width: 100%;
        height: 100%;
        color: #fff;
    }

    .btn-text:hover{
        background: rgb(211, 211, 145);
        color: olive;
        transition: .2s;
    }
</style>