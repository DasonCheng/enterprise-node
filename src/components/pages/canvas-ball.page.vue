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
        BALLS: []
      }
    },
    computed: {},
    methods: {
      initBalls(){
        _.times(100, () => {
          this.BALLS = _.concat(this.BALLS, {
            x: _.random(this.size.width, true),
            y: _.random(this.size.height, true),
            radius: _.sample([1, 4, 6, 8]),
            vx: _.random(2, true) * _.sample([-1, 1]),
            vy: _.random(2, true) * _.sample([-1, 1])
          })
        });
      },
      renderArc(ctx){
        this.BALLS.map((ball) => {
          ctx.beginPath();
          ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.closePath();
        })
      }
    },
    mounted(){
      const canvas = this.$el;
      const ctx = canvas.getContext('2d');
      this.initBalls();
      this.renderArc(ctx);
    }
  }
</script>
<style lang="scss" scoped>
  canvas {
    display: block;
  }
</style>
