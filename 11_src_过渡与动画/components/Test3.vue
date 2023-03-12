<template>
  <div>
    <button @click="state">显示/隐藏</button>
    <transition
    appear
    name="animate__animated animate__bounce" 
    enter-active-class="animate__wobble"
    leave-active-class="animate__zoomOutUp"
    >
        <h1 v-show="isShow">Vue</h1>
    </transition>
  </div>
</template>

<script>
    // 引入第三方库
    import 'animate.css'
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
    
</style>