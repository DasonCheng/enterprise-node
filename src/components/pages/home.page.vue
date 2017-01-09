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
            name: 'game one',
            link: '/game/one'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
