<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2 class="test">学生年龄：{{age}}</h2>
  </div>
</template>

<script>
  export default {
    name:'School',
    data() {
      return {
        name:'张三张三张三',
        age:18
      }
    }
  }
</script>

<style scoped lang="less">
/* 
  scoped样式
    作用：让样式在局部生效，防止冲突。
    写法：<style scoped>

  lang="less" 表示样式时用less写的
*/
  /* 这里样式跟School样式冲突 */
  .demo{
    background-color: blue;
    .test{
      font-size: 40px;
    }
  }
</style>