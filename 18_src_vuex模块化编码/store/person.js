import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
    namespaced: true,
    actions: {
        addWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('请输入王姓的人')
            }
        },
        addPresonServe(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social')
                .then(res => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: res.data })
                })
                .catch(e => {
                    console.log(e.message)
                })
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}