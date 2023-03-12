<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 定义一个插槽 -->
    <slot>我是默认值</slot>
  </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title','List']
    }
</script>

<style>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3{
    background-color: orange;
    text-align: center;
  }
  img{
    width: 100%;
  }
  video{
    width: 100%;
  }
</style>