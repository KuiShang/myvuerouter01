<template lang="html">
    <div class="pagea">
        pageb
    </div>
</template>
<script type="text/ecmascript-6">
    import api from '../api'
    export default{
        data () {
            return {}
        },
        beforeRouteEnter (to, from, next) {
            console.log('我是pageb进入前的导航钩子', to, from)
            api.getDatas(data => {
                next(vm =>{
                   // vm.$store.commit('changestate',true);
                })
            })
        },
        methods: {}
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .pagea {
        width: 300px;
        height: 300px;
        border: 1px solid red;
    }

</style>