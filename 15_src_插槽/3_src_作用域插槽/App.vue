<template>
    <div class="container">
		<Category>
			<!-- 这里hello接收到的是一个对象，不一定名字要和传数据过来的相同 -->
			<template v-slot="hello">
				<ul>
					<li v-for="(g,index) in hello.games" :key="index">{{g}}</li>
				</ul>
			</template>
		</Category>
		<Category>
			<!-- 这里使用了解构赋值 -->
			<template v-slot="{games}">
				<ol>
					<li v-for="(g,index) in games" :key="index">{{g}}</li>
				</ol>
			</template>
		</Category>
		<Category>
			<template v-slot="{games}">
					<h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category.vue'
    export default {
      name:'App',
	  components:{Category}
    }
</script>

<style scoped>
	.container,.demo{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>