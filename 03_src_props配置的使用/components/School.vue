<template>
  <div class="school">
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
  export default {
    name:'School',
    data() {
      return {
        msg:'Vue学院'
      }
    },
    // 简单声明接收
    // props:['name','age','sex']

    // 接收的同时对类型进行限制
    /* props:{
      name:String,
      age:Number,
      sex:String
    } */

    // 接受的同时对数据：进行类型限制+默认值的指定+必要性的限制
    props:{
      name:{
        type:String,// name的类型值字符串
        required:true,// name是必要的
      },
      age:{
        type:Number,
        default:99,// age的默认值
      },
      sex:{
        type:String,
        required:true
      }
    }
  }
</script>

<style>
  .school{
    background-color: #ccc;
  }
</style>