<template>
  <div>
    <button @click="state">显示/隐藏</button>
    <transition-group name="hello" appear>
        <h1 v-show="!isShow" key="1">你好</h1>
        <h1 v-show="isShow" key="2">Vue</h1>
    </transition-group>
  </div>
</template>

<script>
    export default {
        name:'Test',
        data() {
            return {
                isShow:true
            }
        },
        methods: {
            state(){
                this.isShow = !this.isShow
            }
        },
    }
</script>

<style scoped>
    h1{
        background-color: red;
        /* transition: .5s linear; */
    }
    /* 进入时的起点、离开时的终点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    /* 进入时的过程、离开时的过程 */
    .hello-enter-active,.hello-leave-active{
        transition: .5s linear;
    }
    /* 进入时的终点、离开时的起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }
</style>