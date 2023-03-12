export default {
    namespaced: true,
    actions: {
        jiaOdd(context, value) {
            // console.log('action中的jiaOdd被调用了', context, value)
            if (context.state.sum % 2 !== 0) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            // console.log('action中的jiaWait被调用了', context, value)
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500);
        }
    },
    mutations: {
        JIA(state, value) {
            // console.log('mutations中的JIA被调用了', state, value)
            state.sum += value
        },
        JIAN(state, value) {
            // console.log('mutations中的JIA被调用了', state, value)
            state.sum -= value
        },
    },
    state: { sum: 0, },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}