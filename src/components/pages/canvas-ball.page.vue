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
//        _.times(500, () => {
//          this.BALLS = _.concat(this.BALLS, {
//            x: _.random(this.size.width, true),
//            y: _.random(this.size.height, true),
//            radius: _.random(15, true),
//            color: _.sample(['#c0392b', '#e67e22', '#f1c40f'])
//          })
//        })
        while (this.BALLS.length < 150) {
          let BALL = {
            x: _.random(this.size.width, true),
            y: _.random(this.size.height, true),
            radius: _.random(15, true),
            color: _.sample(['#c0392b', '#e67e22', '#f1c40f'])
          };
          if (this.BALLS.length === 0) {
            this.BALLS = _.concat(this.BALLS, BALL)
          }
          for (let i = 0; i < this.BALLS.length; i++) {
            let dx = this.BALLS[i].x - BALL.x;
            let dy = this.BALLS[i].y - BALL.y;
            let dr = this.BALLS[i].radius + BALL.radius;
            if ((dx * dx + dy * dy) < dr * dr) {
              break
            } else if (i === this.BALLS.length - 1) {
              this.BALLS = _.concat(this.BALLS, BALL)
            }
          }
        }
      },
      renderArc(ctx){
        this.BALLS.map((ball) => {
          ctx.beginPath();
          ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
          ctx.fillStyle = ball.color;
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
    background-color: rgb(58, 58, 58);
  }
</style>
