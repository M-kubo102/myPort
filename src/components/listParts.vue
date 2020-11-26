<template>
    <div>
        <ul v-for="list in lists" :key="list.id">
            <li>{{list.content}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['lists']
}
</script>

<style>

</style>