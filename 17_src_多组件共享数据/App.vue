<template>
    <div class="container">
		<Count/>
		<hr>
		<Person/>
	</div>
</template>

<script>
	import Count from './components/Count.vue'
	import Person from './components/Person.vue'
    export default {
      name:'App',
	  components:{Count,Person}
    }
</script>

<style>
	.container{
		display: flex;
		flex-direction: column;
	}
	h4{
		text-align: center;
	}
</style>