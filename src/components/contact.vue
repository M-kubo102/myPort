<template>
    <div class="contact">
        <contentTitle title="Contact"></contentTitle>
        <section>
            <p>お問い合わせはメールアドレス、または下記フォームよりお願い致します。</p>
            <p>メールアドレス：　xxxxx[at]gmail.com</p>

            <p id="caution">※フォーム作成の練習用ページ。送信押しても何も起こりません。</p>
        </section>
        <contactForm></contactForm>
    </div>
</template>

<script>
import contentTitle from "../components/contentTitle"
import contactForm from "../components/contactForm"

export default {
    name: 'Contact',
    components: {
        contentTitle,
        contactForm
    }
}
</script>

<style>
    .contact{
        text-align: center;
    }

    .contact section{
        margin-bottom: 32px;
    }

    .contact section p:nth-child(2){
        font-size: 14px;
    }

    #caution{
        color: #c92424;
    }
</style>