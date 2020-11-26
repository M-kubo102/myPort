<template>
    <section class="about">
        <div class="profile">
            <section>
                <img :src="imgSrc">
                <div class="info">
                        <h2 class="name">MO</h2>
                        <p class="bio">色々勉強中です。</p>
                </div>
            </section>
        </div>

        <div class="history">
            <h2>経歴</h2>
            <ul>
                <li>1996年10月22日生まれ　茨城在住</li>
                <li>川村学園女子大学文学部卒（2019年3月）</li>
            </ul>

            <h2>勉強中の技術</h2>
            <ul>
                <li>Java</li>
                <li>HTML / CSS / JavaScript / Vue.js</li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            imgSrc: require('@/assets/hiyoko_baby.png')
        }
    }
}
</script>

<style>

    .about section{
        display: flex;
        justify-content: space-between;
    }

    .profile {
        margin: 10px auto;
    }

    .info .name{
        margin: 0;
        padding: 10px;
    }

    img{
        width: 120px;
        height: 120px;
        padding: 12px;
    }

    .history{
       width: 350px;
       /* padding: 18px; */
       margin: 10px auto;
    }

    .history h2{
        font-weight: normal;
        margin: 0;
    }
</style>