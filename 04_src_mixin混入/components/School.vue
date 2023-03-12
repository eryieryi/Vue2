<template>
  <div class="school">
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  // 引入mixin混入
  import {mixin} from '../mixin'
  export default {
    name:'School',
    data() {
      return {
        name:'东华',
        address:'北京'
      }
    },
    // 配置mixins
    mixins:[mixin]
  }
</script>

<style>
  .school{
    background-color: #ccc;
  }
</style>