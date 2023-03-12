// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'news',
                    path: 'news',
                    meta: { isAuth: true },
                    component: News,
                    // 独享路由守卫
                    /* beforeEnter: (to, from, next) => {
                        console.log(to, from)
                        if (to.meta.isAuth) {  //判断当前路由是否需要进行权限控制
                            if (localStorage.getItem('school') === '东华理工大学') { //权限控制的具体规则
                                next() //放行
                            } else {
                                alert('学校错误!')
                            }
                        } else {
                            next() //放行
                        }
                    } */
                },
                {
                    name: 'message',
                    path: 'message',
                    meta: { isAuth: true },
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail,

                            //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
                            // props: { id: '666', title: '你好' }

                            //第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
                            // props: true

                            //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置守卫：初始化时执行、每次路由切换前执行
router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from)
    if (to.meta.isAuth) {  //判断当前路由是否需要进行权限控制
        if (localStorage.getItem('school') === '东华理工大学') { //权限控制的具体规则
            next() //放行
        } else {
            alert('学校错误!')
        }
    } else {
        next() //放行
    }
})

//全局后置守卫：初始化时执行、每次路由切换后执行
router.afterEach((to, from) => {
    console.log('afterEach', to, from)
    /* if (to.meta.title) {
        document.title = to.meta.title //修改网页的title
    } else {
        document.title = 'vue_test'
    } */
})

export default router