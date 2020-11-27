<template>
    <div class="form">
        <div>
            <label for="name">お名前</label>
            <!-- <p v-if="!valid.name">{{error.name}}</p> -->
            <br>
            <input type="text" id="name" v-model="form.name">
        </div>

        <div class="selectbox">
            <label for="age">年齢</label>
            <br>
            <select id="age" v-model="form.age" required>
                <option value="" hidden>選択してください</option>
                <option value="1">10代</option>
                <option value="2">20代</option>
                <option value="3">30代</option>
                <option value="4">40代</option>
                <option value="5">50代</option>
                <option value="6">それ以上</option>
            </select>
        </div>
        
        <div class="selectbox">
            <label for="gender">性別</label>
            <br>
            <select id="gender" v-model="form.gender" required>
                <option value="" hidden>選択してください</option>
                <option value="1">女性</option>
                <option value="2">男性</option>
                <option value="3">選択しない</option>
            </select>
        </div>

        <div>
            <label for="email">メールアドレス</label>
            <!-- <p v-if="!valid.email">{{error.email}}</p> -->
            <br>
            <input type="email" id="email" v-model="form.email">
        </div>

        <div>
            <label for="content">お問い合わせ内容</label>
            <!-- <p v-if="!valid.content">{{error.content}}</p> -->
            <br>
            <textarea id="content" v-model="form.content"></textarea>
        </div>

        <button type="submit" @click="send">送信</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                name: '',
                age: '',
                gender: '',
                email: '',
                content: ''
            },
            error:{
                name: 'お名前を入力してください。',
                age: '年齢を選択してください。',
                gender: '性別を選択してください。',
                email: '正しいメールアドレスを入力してください。',
                content: 'お問い合わせ内容を入力してください。',
            }
        }
    },
    methods: {
        valid(){
            const form = this.form
            const regEmail = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
            
            return{
                email: (() => {
                    if(form.email) {
                        if (!form.email.match(regEmail)) {
                            return false
                        }
                            return true
                    } else {
                        return false
                    }
                })(),
            }
        },
        send(){
            alert('お問い合わせありがとうございます！');
        }
    }
}
</script>

<style>
    input,
    button,
    textarea,
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        box-sizing: border-box;
        font-family: inherit;
    }

    .form {
        text-align: left;
        width: 500px;
        margin: 10px auto;
        padding: 24px 12px;
        border: solid 1px #bbb;
    }

    .form div{
        padding: 12px;
    }

    .form p{
        font-size: 12px;
        color: #eb4343;
        margin: 5px 0;
    }

    label{
        margin-right: 12px;
    }

    input{
        border: 1px solid #bbb;
        outline: 0;
        height: 32px;
        border-radius: 4px;
    }

    input:focus {
        border: 1px solid#2d9fbb;
        -moz-box-shadow: inset 0 0 4px  #2d9fbb;
        -webkit-box-shadow: inset 0 0 4px #2d9fbb;
        box-shadow: inner 0 0 4px #2d9fbb;
    }

    select{
        border: 1px solid #bbb;
        outline: 0;
        height: 32px;
        cursor: pointer;
        padding: 5px 15px 5px 5px;
        width: 150px;
        height: 40px;
        border-radius: 4px;
    }
    

    select:focus{
        border: 1px solid#2d9fbb;
        -moz-box-shadow: inset 0 0 4px  #2d9fbb;
        -webkit-box-shadow: inset 0 0 4px #2d9fbb;
        box-shadow: inner 0 0 4px #2d9fbb;
    }

    textarea{
        border: 1px solid #bbb;
        outline: 0;
        height: 80px;
        width: 476px;
        resize: none;
        border-radius: 4px;
    }

    textarea:focus{
        border: 1px solid#2d9fbb;
        -moz-box-shadow: inset 0 0 4px  #2d9fbb;
        -webkit-box-shadow: inset 0 0 4px #2d9fbb;
        box-shadow: inner 0 0 4px #2d9fbb;
    }

    button{
        display: block;
        background: #2d9fbb;
        border: none;
        padding: 5px;
        width: 80px;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        font-size: 18px;
        margin: 0 auto;
        box-shadow: 0 3px 0 #1d697c;
    }

    button:hover{
        background: #d9e9f7;
        color:  #2d9fbb;
        box-shadow: 0 3px 0 #2d9fbb;
    }

    button:focus{
        outline: 0;
    }

    button:active{
        box-shadow: none;
        transform: translateY(3px);
    }
</style>