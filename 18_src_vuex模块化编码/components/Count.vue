<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h1>当前求和10倍为：{{bigSum}}</h1>
		<h3>Person组件人数为：{{personList.length}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
    import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
        computed:{

            ...mapState('countAbout',['sum']),
            ...mapState('personAbout',['personList']),

            //借助mapGetters生成计算属性：bigSum（对象写法）
            // ...mapGetters({bigSum:'bigSum'})
            //借助mapGetters生成计算属性：bigSum（数组写法）
            ...mapGetters('countAbout',['bigSum'])
        },
		methods: {
            //靠mapActions生成：incrementOdd、incrementWait（对象形式）
            ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),

            //靠mapActions生成：increment、decrement（对象形式）
            ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
            //靠mapMutations生成：JIA、JIAN（对象形式）
		},
		mounted() {
			console.log('Count',this.$store)
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
