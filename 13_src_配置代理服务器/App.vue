<template>
    <div>
		<button @click="getStudent">点我加载数据</button>
	</div>
</template>

<script>
	import axios from 'axios'
    export default {
      name:'App',
	  methods: {
		getStudent(){
			axios.get("http://localhost:8080/api/students").then(
				res =>{
					console.log("请求成功了",res.data.data)
				},
				err =>{
					console.log("请求失败了",err.massage)
				}
			)
		}
	  },	
    }
</script>
