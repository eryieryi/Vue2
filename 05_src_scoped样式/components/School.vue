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
    }
  }
</script>

<style scoped>
/* 
  scoped样式
    作用：让样式在局部生效，防止冲突。
    写法：<style scoped>
*/
  /* 这里样式跟Student样式冲突 */
  .demo{
    background-color: red;
  }
</style>