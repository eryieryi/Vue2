<template>
    <div class="container">
		<Count/>
	</div>
</template>

<script>
	import Count from './components/Count.vue'
    export default {
      name:'App',
	  components:{Count}
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