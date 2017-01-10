<template>
  <div>
    <canvas class="ctx-a" :width=size.width :height=size.height></canvas>
    <canvas class="ctx-b" :width=size.width :height=size.height></canvas>
  </div>
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
        }
      }
    },
    computed: {},
    methods: {
      render(ctx, ball){
        ctx.beginPath();
        ctx.fillStyle = 'rgba(39, 197, 166,1)';
        ctx.arc(ball.x, ball.y, 1, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        ball.x += ball.vx;
        ball.y += ball.vy;
      },
      line(ctx, ball){
        if (this.mouse.x && Math.pow(Math.abs(ball.x - this.mouse.x), 2) + Math.pow(Math.abs(ball.y - this.mouse.y), 2) <= Math.pow(100, 2)) {
          ctx.beginPath();
          ctx.moveTo(ball.x, ball.y);
          ctx.lineTo(this.mouse.x, this.mouse.y);
          ctx.strokeStyle = `rgba(39, 197, 166,${1 - (Math.pow(Math.abs(ball.x - this.mouse.x), 2) + Math.pow(Math.abs(ball.y - this.mouse.y), 2)) / Math.pow(100, 2)})`;
          ctx.stroke();
          ctx.closePath();
        }
      }
    },
    mounted(){
      let canvas_a = this.$el.querySelectorAll('.ctx-a')[0];
      let canvas_b = this.$el.querySelectorAll('.ctx-b')[0];
      let ctx_a = canvas_a.getContext("2d");
      let ctx_b = canvas_b.getContext("2d");

      ctx_a.fillStyle = 'rgba(35,135,160,.5)';
      ctx_a.fillRect(0, 0, this.size.width, this.size.height);
      let cRect = canvas_b.getBoundingClientRect();
      canvas_b.addEventListener('mousemove', (e) => {
        this.mouse.x = Math.round(e.clientX - cRect.left);
        this.mouse.y = Math.round(e.clientY - cRect.top);
      });
      canvas_b.addEventListener('mouseout', (e) => {
        this.mouse.x = null;
        this.mouse.y = null;
      });
      let balls = [];
      _.times(500, () => {
        balls = _.concat(balls, {
          x: _.random(this.size.width, true),
          y: _.random(this.size.height, true),
          vx: _.random(2, true) * _.sample([-1, 1]),
          vy: _.random(2, true) * _.sample([-1, 1])
        });
      });
      let animate = () => {
        ctx_b.clearRect(0, 0, this.size.width, this.size.height);
        _.map(balls, (ball) => {
          this.line(ctx_b, ball);
          this.render(ctx_b, ball);
          if (ball.x < 0 || ball.x > this.size.width || ball.y < 0 || ball.y > this.size.height) {
            balls = _.concat(balls, {
              x: _.random(this.size.width, true),
              y: _.random(this.size.height, true),
              vx: _.random(2, true) * _.sample([-1, 1]),
              vy: _.random(2, true) * _.sample([-1, 1])
            });
            _.pullAllWith(balls, [ball], _.isEqual);
          }
        });
        ctx_b.fillText("X: " + this.mouse.x + ", Y: " + this.mouse.y, 10, 20);
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }
</script>
<style lang="scss" scoped>
  div {
    position: relative;
    color: #ecf0f1;
    background-color: rgba(0, 0, 0, 0.7);
  }

  canvas {
    display: block;
    &.ctx-a {

    }
    &.ctx-b {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
