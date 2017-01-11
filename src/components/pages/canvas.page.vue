<template>
  <div>
    <router-link v-for="item in items" :to="{ path: item.link }">
      {{item.name}}
    </router-link>
  </div>
</template>
<script lang="babel">
  export default{
    data(){
      return {
        items: [
          {
            name: 'line',
            link: '/home/canvas/line'
          },
          {
            name: 'ball',
            link: '/home/canvas/ball'
          }
        ]
      }
    },
    computed: {},
    methods: {},
    mounted(){
    }
  }
</script>
<style lang="scss" scoped>

</style>
