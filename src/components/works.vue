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

            <a href="https://github.com/M-kubo102/todo_vue.git" class="workLink" target="_blank" rel="noopener noreferrer">
                <h3>メモアプリ</h3>
                <p>ToDo等をメモできるアプリです。</p>
            </a>

            <a href="https://github.com/M-kubo102/note-vue.git" class="workLink" target="_blank" rel="noopener noreferrer">
                <h3>学習ノート</h3>
                <p>Vue.jsの学習ノートです。</p>
            </a>

            <a href="https://github.com/M-kubo102/shop_vue.git" class="workLink" target="_blank" rel="noopener noreferrer">
                <h3>ショッピング</h3>
                <p>ショッピングサイトです。</p>
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
        display: grid;
        width: 800px;
        margin: 10px auto;
        margin-bottom: 50px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-template-rows: 200px;
        gap: 20px;
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