<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App'
}
</script>


<style lang="stylus">
html,body
    margin 0
    padding 0
    min-height 100%
    #app
        min-height 100%
</style>
