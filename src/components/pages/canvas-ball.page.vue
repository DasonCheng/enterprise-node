<template>
  <canvas :width=size.width :height=size.height></canvas>
</template>
<script lang="babel">
  export default{
    data(){
      return {
        size: {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        },
        mouse: {
          x: null,
          y: null
        },
        balls: null
      }
    },
    computed: {},
    methods: {
      initBalls(){
        let BALLS = new Array;
        _.times(10, () => {
          _.concat(BALLS,{
            x:_.random(this.size.width,true),
            y:_.random(this.size.width,true),
            r:_.random(this.size.width,true)
          })
        })
      }
    },
    mounted(){
      const canvas = this.$el;
      const ctx = canvas.getContext('2d');
      this.initBalls();
    }
  }
</script>
<style lang="scss" scoped>
  canvas {
    display: block;
  }
</style>
