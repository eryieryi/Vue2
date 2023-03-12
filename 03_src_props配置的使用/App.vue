<template>
  <div>
    <!-- :age数据绑定 获取引号中的表达式 -->
    <School name="张三" :age="18" sex="男"/>
  </div>
</template>

<script>
    // 引入School组件
    import School from './components/School.vue'
    // 导出
    export default {
      name:'App',
      components:{School}
    }
</script>

<style>

</style>