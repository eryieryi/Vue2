<template>
	<div class="todo-footer" v-show="total">
		<label>
			<!-- <input type="checkbox" :checked="isAll" @change="checkedAll"/> -->
			<input type="checkbox" v-model="isAll"/>
		</label>
		<span>
			<span>已完成{{doneTotal}}</span> / 全部{{total}}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		name:'MyFooter',
		props:['todos'],
		computed:{
			// 总个数
			total(){
				return this.todos.length
			},
			// 被选中的个数
			doneTotal(){
				return this.todos.reduce((pre,todo)=>pre + (todo.done ? 1 : 0),0)
			},
			// 判断选中个数和总个数
			isAll:{
				get(){
					return this.total === this.doneTotal && this.total > 0
				},
				set(value){
					// this.checkedDone(value)
					this.$emit('checkedDone',value)
				}
			}
		},
		methods: {
			/* checkedAll(e){
				this.checkedDone(e.target.checked)
			} */
			clearAll(){
				// this.clearAllTone()
				this.$emit('clearAllTone')
			}
		},
	}
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>