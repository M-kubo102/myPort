<template>
    <header>
        <div class="logo">
            <h1>Website</h1>
        </div>
        <div class="container">
            <ul class="menu">
                <li><router-link to="/" class="btn"><span class="btn-text">Top</span></router-link></li>
                <li><router-link to="/about" class="btn"><span class="btn-text">About</span></router-link></li>
                <li><router-link to="/works" class="btn"><span class="btn-text">Works</span></router-link></li>
                <li><router-link to="/contact" class="btn"><span class="btn-text">Contact</span></router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>

export default {
    
}
</script>

<style>
    header{
        color: #333;
        width: 100%;
        height: 64px;
        background: olive;
        display: flex;
    }

    .logo{
        line-height: 15px;
        margin: 0 24px;
        color: #fff;
        font-size: 18px;
    }

    .menu{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        font-size: 18px;
    }

    a{
        display: block;  
        text-decoration: none;     
    }

    .btn{
        width: 120px;
        line-height: 64px;
        text-align: center;
        position: relative;
        display: flex;
    }

    .btn-text{
        width: 100%;
        height: 100%;
        color: #fff;
    }

    .btn-text:hover{
        background: rgb(211, 211, 145);
        color: olive;
        transition: .2s;
    }

</style>