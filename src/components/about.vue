<template>
  <div class="about">
    <contentTitle title="About"></contentTitle>
    <aboutContent></aboutContent>
  </div>
</template>

<script>
import contentTitle from "../components/contentTitle"
import aboutContent from "../components/aboutContent"

export default {
    name: 'About',
    components:{
        contentTitle,
        aboutContent,
    },
}
</script>

<style>

</style>