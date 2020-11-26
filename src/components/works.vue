<template>
    <div>
        <contentTitle title="Works"></contentTitle>
        <p class="worksText">クリックするとgithubのページに飛びます。全てVue.jsの学習で作成。</p>
        <p class="worksText">※ドットインストールの作成方法を参考。</p>

        <section class="workContainer">
            <a href="https://github.com/M-kubo102/note-vue.git" class="workLink" target="_blank" rel="noopener noreferrer">
                <h3>学習ノート</h3>
                <p>Vue.jsの学習ノート。実践課題を動かしてみるやつ。</p>
            </a>

            <a href="https://github.com/M-kubo102/firstStudy_vue.git" class="workLink" target="_blank" rel="noopener noreferrer">
                <h3>練習サイト</h3>
                <p>取り敢えずサイトっぽいものを作ってみようと思い、イラストレーターのWebサイトという体で作ったもの。</p>
            </a>
            
            <a href="https://github.com/M-kubo102/todo_vue.git" class="workLink" target="_blank" rel="noopener noreferrer">
                <h3>メモアプリ</h3>
                <p>Vue.js学習あるあるのToDoアプリの作成練習。同じような機能のToDoメモが2種類。</p>
            </a>
            
            <a href="https://github.com/M-kubo102/quiz_vue.git" class="workLink" target="_blank" rel="noopener noreferrer">
                <h3>クイズアプリ</h3>
                <p>3択クイズの作成練習。問題・解答のシャッフルが未実装。</p>
            </a>

            <a href="https://github.com/M-kubo102/game_vue.git" class="workLink" target="_blank" rel="noopener noreferrer">
                <h3>ゲームアプリ</h3>
                <p>じゃんけん・スロットの作成練習。じゃんけんは勝率の計算も実装。</p>
            </a>

            <a href="https://github.com/M-kubo102/shop_vue.git" class="workLink" target="_blank" rel="noopener noreferrer">
                <h3>ショッピング</h3>
                <p>それっぽいショッピングサイトの練習。現時点では商品をカートに入れる/カートの中身を空にすることが出来る。</p>
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
        font-size: 16px;
    }

    .workContainer{
        width: 800px;
        margin: 10px auto;
        margin-bottom: 50px;
    }

    .workLink{
        background: #adc978;
        color: #222;
        width: 400px;
        border-radius: 10px;
        border: 2px solid #adc978;
        margin: 20px auto;
    }

    .workLink:hover{
        opacity: .6;
    }

    .workLink h3,
    .workLink p{
        padding: 10px;
    }

    .workLink h3{
        margin: 0;
    }

    .workLink p{
        background: #fff;
        /* height: 100px; */
        margin: 0 auto;
        border-radius: 0 0 10px 10px;
        font-size: 14px;
    }

</style>