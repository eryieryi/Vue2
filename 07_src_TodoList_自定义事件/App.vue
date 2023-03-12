<template>
  <div id="root">
		<div class="todo-container" >
			<div class="todo-wrap">
				<MyHeader @addTodo="addTodo"/>
				<MyList :todos="todos" :changeCheck="changeCheck" :deleteTodo="deleteTodo"/>
				<MyFooter :todos="todos" @checkedDone="checkedDone" @clearAllTone="clearAllTone"/>
			</div>
		</div>
	</div>
</template>

<script>
    import MyHeader from "./components/MyHeader.vue"
    import MyFooter from "./components/MyFooter.vue"
    import MyList from "./components/MyList.vue"
    export default {
      name:'App',
      components:{MyHeader,MyFooter,MyList},
      data() {
        return {
          todos:JSON.parse(localStorage.getItem('todos'))
        }
		},
		methods: {
		// 添加todo
		addTodo(todoObj){
			this.todos.unshift(todoObj)
		},
		// 取消或勾选一个todo
		changeCheck(id){
			this.todos.forEach((item)=>{
			if(item.id === id) {
				item.done = !item.done
			}
			})
		},
		// 删除todo
		deleteTodo(id){
			this.todos = this.todos.filter(item=>item.id !== id)
		},
		// 全选or取消全选
		checkedDone(done){
			this.todos.forEach(item=>item.done = done)
		},
		// 清除被选中的tone
		clearAllTone(){
			this.todos = this.todos.filter(item=>!item.done)
		}
		},
		watch:{
			todos:{
				deep:true,
				handler(newVal){
					localStorage.setItem("todos",JSON.stringify(newVal))
				}
			}
		}
    }
</script>

<style>
  /*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>