<template>
    <div class="demo">
        <h1>学校名称：{{ schoolName }}</h1>
        <h1>学校地址：{{ address }}</h1>
    </div>
</template>

<script>

    export default {
        name:'SchoolInfo',
        data() {
            return {
                schoolName: 'Vue',
                address: '北京'
            }
        },
        methods: {

        },
    }

</script>

<style>
    .demo{
        background-color: red;
    }
</style>