<template lang="html">
    <div class="app">
        <div class="loading">
            <i v-show="isLoading" class="icon-loading"></i>
        </div>

        <router-link to="/">pagea</router-link>
        <router-link to="/pageb">pageb</router-link>
        <router-link to="/pagec">pagec</router-link>
        <router-view class="view"></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                isLoading:false
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @keyframes loading {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .icon-loading {
        display: inline-block;
        position: absolute;
        text-align: center;
        width: 40px;
        height: 40px;
        background: url('./icon-loading.svg') no-repeat;
        animation: loading .4s linear infinite;
        background-size: contain;
    }
</style>