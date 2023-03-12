<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="KeyWord"/>&nbsp;
			<button @click="searchUser">Search</button>
		</div>
	</section>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'Search',
		data() {
			return {
				KeyWord:''
			}
		},
		methods: {
			searchUser(){
				// 请求前更新List数据
				this.$bus.$emit('updateListMsg',{isFirst:false,isLoading:true,errMsg:'',users:[]})
				axios.get(`https://api.github.com/search/users?q=${this.KeyWord}`).then(
					res=>{
						console.log("请求发送成功")
						// 请求成功后更新List数据
						this.$bus.$emit('updateListMsg',{isLoading:false,errMsg:'',users:res.data.items})
					}
				).catch((err)=>{
					// 请求失败后更新List数据
					this.$bus.$emit('updateListMsg',{isLoading:false,errMsg:err.message,users:[]})
				})
			}
		},
	}
</script>
