<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name:'School',
    data() {
      return {
        name:'东华理工大学',
        address:'北京'
      }
    },
    mounted() {
      this.$bus.$on('hello',(data)=>{
            console.log("School组件事件被触发了",data)
        })
    },
    beforeDestroy(){
      this.$bus.$off('hello')
    }
  }
</script>

<style>
  .demo{
    background-color: red;
  }
</style>