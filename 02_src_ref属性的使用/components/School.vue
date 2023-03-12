<template>
  <div class="school">
    <h1>学校名称{{name}}</h1>
    <h1>学校地址{{address}}</h1>
  </div>
</template>

<script>
  export default {
    name:'School',
    data() {
      return {
        name:'Vue',
        address:'北京'
      }
    },
  }
</script>

<style>
  .school{
    background-color: #ccc;
  }
</style>