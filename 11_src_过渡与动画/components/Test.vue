<template>
  <div>
    <button @click="state">显示/隐藏</button>
    <transition name="hello" appear>
        <h1 v-show="isShow" >你好</h1>
    </transition>
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
    }
    /* 进入时的动画 */
    .hello-enter-active{
        animation: state 1s linear;
    }
    /* 离开时的动画 */
    .hello-leave-active{
        animation: state 1s linear reverse;
    }
    @keyframes state {
        0%{
            transform: translateX(-100%);
        }
        100%{
            transform: translateX(0);
        }
    }
</style>