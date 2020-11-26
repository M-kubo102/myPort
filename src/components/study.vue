<template>
    <div class="studyContainer">
        <contentTitle title="Study"></contentTitle>

        <div class="sectionMenu">
            <h2 class="sectionTitle" @click="showAbout" :class="{isShow : isAbout}">概要</h2>
            <h2 class="sectionTitle" @click="showHistory" :class="{isShow : isHistory}">流れ</h2>
        </div>
        <section v-show="isAbout">
            <textParts v-for="content in aboutContents" :key="content.id" :title="content.title" :text="content.text"></textParts>
            <linkParts v-for="link in links" :key="link.id" :title="link.title" :text="link.text" :url="link.url"></linkParts>
        </section>
        <section v-show="isHistory">
            <textParts v-for="content in histContents" :key="content.id" :title="content.title" :text="content.text"></textParts>
            <listParts :lists="yetList"></listParts>
        </section>

    </div>
</template>

<script>
import contentTitle from '../components/contentTitle'
import textParts from '../components/textParts'
import linkParts from '../components/linkParts'
import listParts from '../components/listParts'

export default {
    name: 'Study',
    components:{
        contentTitle,
        textParts,
        linkParts,
        listParts,
    },
    data(){
        return{
            isAbout: true,
            isHistory: false,
            aboutContents:[
                {
                    title: '●経緯',
                    text: '仕事で（コロナによる都合もあり）Vue.jsの学習をする機会を与えてもらったことがきっかけ。jQueryどころかJSも初心者なので、とにかく基礎からの学習を開始。'
                },
                {
                    title: '●使った本',
                    text: ''
                },
                {
                    title: '1日で基本が身に付く！Vue.js超入門',
                    text: 'タイトルにつられて1冊目として買ってみた。取り敢えず基本的な文法とかは分かる。これを読んだ後に練習サイトを作ってみたりした。'
                },
                {
                    title: '基礎から学ぶVue.js',
                    text: '2冊目。1冊目よりもちょっと難しいけど細かいことも載ってる。コンポーネント周り等はこっちの方が理解できた。この辺りで.vueファイルでの開発を知った。'
                },
                {
                    title: '●使ったサイト・記事',
                    text: ''
                },
            ],
            histContents:[
                {
                    title: 'HTML / JS / CSSの学習から',
                    text: 'いきなりVue.jsの勉強を始めてついていけるのか？と思い、最初はフロントの基礎的な部分から勉強することに。ただ割とすぐVueの学習に移ってしまったので、JSはかなり怪しい。。'
                },
                {
                    title: 'Vue.jsを触ってみることに',
                    text: 'ドットインストールと1冊目の本を使って、取り敢えずVue.jsというものに触れてみる。基本的な文法を覚えたところで、何となく分かった気になる。'
                },
                {
                    title: '記事・実践課題探し',
                    text: '自分的にはとにかく何かを作って身に付けたい気持ちが強いので、引き続き教科書になる本・記事探しと実践課題探し。ELOOPの実践課題をやってみるうちに、色々理解不足が出てくる。'
                },
                {
                    title: 'vue-cli',
                    text: '記事を見ていると、vue-cliなるものに遭遇。コマンドプロンプトをろくに使ったことがないながらも、何とか導入。扱いに慣れるため、今後はこれを用いて色々作成してみることに。'
                },
                {
                    title: '色々作ってみる',
                    text: 'ドットインストールにあった「JavaScriptで○○を作ろう」からいくつかVue.jsで作ってみることにする。クイズのシャッフル機能で詰み、一旦諦めてじゃんけん・スロットのゲームアプリや、ToDoアプリの作成に。'
                },
                {
                    title: '学習のまとめの必要性',
                    text: '1つ1つが大したクオリティではないとはいえ、一応色々作ったのだから、それらをまとめるサイトを作ろうと考える。ポートフォリオと呼ぶには成果物がショボいが、まあそこは追々。ついでに怪しかったgitの使い方も改めて学習。'
                },
                {
                    title: '結局コンポーネント',
                    text: 'ELOOPの最後の課題が難しそうだったので、ショッピングサイトとして作成。ここまで来てようやく$emitをちゃんと使うことが出来るようになった気がした。最初に分からなかったからといってズルズル伸ばしてはいけない。'
                },
                {
                    title: 'まだ出来ていないこと',
                    text: ''
                },
            ],
            yetList:[
                {content: 'クイズのシャッフル機能の実装'},
                {content: 'ショッピングサイトの数量変更・会計・出来たらログインシステム'},
                {content: 'vuex'},
                {content: 'API使ってみる'},
            ],
            links:[
                {
                    title: 'ドットインストール',
                    text: 'お金かかるけどやむなし。HTML / JS / CSS / Vue.jsの講座を受講した。他の有料学習コンテンツを利用していないので比較できないが、分かりやすくて良いと思う。3択クイズやじゃんけん等の作成練習はこのサイトのものを参考にした。',
                    url: 'https://dotinstall.com/'
                },
                {
                    title: 'ELOOP WEBフロントエンジニア#2（Vue.js編）',
                    text: '会員登録とかは特にしていない。実践課題に取り組めるので、とりあえずチャレンジ（Worksの学習ノート）。',
                    url: 'https://www.e-loop.jp/courses/2'
                },
                {
                    title: '1週間でVue.jsをマスターしようと思った時に参考にしたサイト',
                    text: '本・サイトの参考にした記事。',
                    url: 'https://qiita.com/mimoe/items/56784c9d17ed34ee7533'
                },
                {
                    title: 'Vue-routerを使って、SPAをシンプルにはじめてみる',
                    text: '「そういえばVue.jsでのページ遷移ってどうやるん？」ってなった時にお世話になった記事。',
                    url: 'https://qiita.com/567000/items/d6a7c694a370dc92e774'
                },
                {
                    title: 'vue-cliの導入から新規でVue.jsのプロジェクト作成とビルド方法まとめ',
                    text: '「基礎から学ぶ～」にも書いてあったが、個人的にはこのサイトの方が分かりやすく感じた。',
                    url: 'https://designsupply-web.com/media/knowledgeside/4632/'
                },
            ]
        }
    },
    methods:{
        showAbout(){
            if(this.isAbout){
                return
            }
            this.isAbout = true;
            this.isHistory = false;
        },
        showHistory(){
            if(this.isHistory){
                return
            }
            this.isAbout = false;
            this.isHistory = true;
        }
    }
}
</script>

<style>
    .studyContainer{
        width: 800px;
        margin: 0 auto;
    }

    .studyContainer section{
        border: 1px solid #96aa98;
        background: #f3f7f1;
    }

    .sectionMenu{
        display: flex;
    }

    .sectionTitle{
        margin: 0;
        border: 1px solid #96aa98;
        border-bottom: none;
        width: 50px;
        padding: 10px;
        border-radius: 10px 10px 0 0;
        cursor: pointer;
        user-select: none;
    }

    .sectionTitle.isShow{
        background: #f3f7f1;
    }
</style>