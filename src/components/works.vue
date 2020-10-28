<template>
    <div>
        <contentTitle title="Works"></contentTitle>
        <p class="worksText">クリックするとgithubのページに飛びます。</p>

        <section class="workContainer">
            <a href="https://github.com/M-kubo102/quiz_vue.git" class="workLink" target="_blank" rel="noopener noreferrer">
                <h3>クイズアプリ</h3>
                <p>3択クイズのアプリです。</p>
            </a>

            <a href="https://github.com/M-kubo102/game_vue.git" class="workLink" target="_blank" rel="noopener noreferrer">
                <h3>ゲームアプリ</h3>
                <p>ミニゲームが遊べるアプリです。</p>
            </a>
        </section>

    </div>
</template>

<script>
import contentTitle from '../components/contentTitle'

export default {
    name: 'Works',
    components:{
        contentTitle
    }
}
</script>

<style>
    .worksText{
        text-align: center;
    }

    .workContainer{
        display: flex;
        justify-content: space-between;
        width: 500px;
        margin: 10px auto;
        margin-bottom: 50px;
    }

    .workLink{
        background: #d6d6d6;
        color: #222;
        width: 200px;
        height: 200px;
        border-radius: 20px;
    }

    .workLink h3,
    .workLink p{
        padding: 10px;
    }

    .workLink h3{
        text-align: center;
    }

    .workLink p{
        background: #fff;
        width: 150px;
        margin: 0 auto;
        border-radius: 20px;
    }

</style>