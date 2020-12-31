<template>

    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'LoginLayout',
        mounted() {
            console.log('this login layout')
        }
    }
</script>
