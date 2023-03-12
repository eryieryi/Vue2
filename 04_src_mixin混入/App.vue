<template>
  <div>
    <School/>
    <Student/>
  </div>
</template>

<script>
    // 引入School组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    // 导出
    export default {
      name:'App',
      components:{School,Student}
    }
</script>

<style>

</style>