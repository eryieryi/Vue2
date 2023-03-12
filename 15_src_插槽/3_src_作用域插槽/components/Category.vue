<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 定义一个插槽 -->
    <!-- 这里通过作用域插槽向使用该组件的组件传值 -->
    <slot :games="games">我是默认值1</slot>
  </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data() {
          return {
            games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
          }
        },
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