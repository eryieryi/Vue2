<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="btn">点我输出元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
    // 引入School组件
    import School from './components/School.vue'
    // 导出
    export default {
      name:'App',
      components:{
        School
      },
      data() {
        return {
          msg:'欢迎来到Vue的世界'
        }
      },
      methods: {
        showDom(){
          console.log(this.$refs.title)// 真实DOM元素
          console.log(this.$refs.btn)// 真实DOM元素
          console.log(this.$refs.sch)// School组件的实例对象（vc）
        }
      },
    }
</script>

<style>

</style>