<template>
  <div>
    <router-link v-for="game in games" :to="{ path: game.link }">
      {{game.name}}
    </router-link>
  </div>
</template>
<script lang="babel">
  export default{
    data(){
      return {
        games: [
          {
            name: 'Canvas',
            link: '/home/canvas'
          },
          {
            name: 'WebGL',
            link: '/home/webgl'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
