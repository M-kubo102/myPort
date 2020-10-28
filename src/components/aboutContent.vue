<template>
    <section class="about">
        <div class="profile">
            <section>
                <span>
                    <svg viewBox="0 0 24 24">
                        <path :d="icon" />
                    </svg>
                </span>
                <div class="info">
                        <h2 class="name">サイト太郎</h2>
                        <p class="bio">Webサイト作成を勉強しています。</p>
                </div>
            </section>
        </div>

        <div class="history">
            <h2>経歴</h2>
            <ul>
                <li>19xx年mm月dd日生まれ　東京都在住</li>
                <li>○○大XX学部卒（20xx年3月）</li>
            </ul>

            <h2>技術</h2>
            <ul>
                <li>Java</li>
                <li>HTML/CSS/JavaScript</li>
            </ul>
        </div>
    </section>
</template>

<script>
import { mdiAccountTie } from '@mdi/js'

export default {
    data(){
        return{
            icon: mdiAccountTie
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

    svg{
        width: 100px;
        height: 100px;
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