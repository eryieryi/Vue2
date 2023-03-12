<template>
  <div class="school">
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
  // 引入mixin混入
  import {mixin} from '../mixin'
  export default {
    name:'School',
    data() {
      return {
        name:'张三',
        age:18
      }
    },
    // 配置mixin
    mixins:[mixin]
  }
</script>

<style>
  .school{
    background-color: #ccc;
  }
</style>