<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件求和为：{{sum}}</h3>
    <h3>第一个人名字：{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">提交</button>
    <button @click="addWang">提交一个姓王的人</button>
    <button @click="addPersonServe">提交一个随机名</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
    import { nanoid } from 'nanoid'
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
            personList(){
                return this.$store.state.personAbout.personList
            },
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstPersonName(){
                return this.$store.getters['personAbout/firstPersonName']
            }
        },
        methods: {
            add(){
                const personObj = { id: nanoid(), name: this.name }
                this.$store.commit('personAbout/ADD_PERSON',personObj)
                this.name = ''
            },
            addWang(){
                const personObj = { id: nanoid(), name: this.name }
                this.$store.dispatch('personAbout/addWang',personObj)
                this.name = ''
            },
            addPersonServe(){
                this.$store.dispatch('personAbout/addPresonServe')
                this.name = ''
            }
        },
    }
</script>
