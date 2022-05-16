<template>
  <div class="header">
  <h1>GOIMAGINARY</h1>

  <p>just <strong @click="toMenu">GO</strong> into the <strong>IMAGINARY</strong> world</p>
  </div>
  <v-stage class="stage" :config="configKonva">

    <v-layer>
      <v-circle :config="conf1"></v-circle>
      <v-circle :config="conf2"></v-circle>

      <v-shape :config="{
        sceneFunc: function(context, shape) {
          const interval = 150;
          
          context.beginPath();
          context.moveTo(configKonva.widthCenter, 0);
          context.lineTo(configKonva.widthCenter, configKonva.height);
          var step = 0;
          while (configKonva.widthCenter + interval*factor*step < configKonva.width) {
            context.moveTo(configKonva.widthCenter-interval*factor*step, 0);
            context.lineTo(configKonva.widthCenter-interval*factor*step, configKonva.height);

            context.moveTo(configKonva.widthCenter+interval*factor*step, 0);
            context.lineTo(configKonva.widthCenter+interval*factor*step, configKonva.height);
            step++;
          }

          context.moveTo(0, configKonva.heightCenter);
          context.lineTo(configKonva.width, configKonva.heightCenter);
          step = 0;
          while (configKonva.heightCenter + interval*factor*step < configKonva.height) {
            context.moveTo(0, configKonva.heightCenter - interval*factor*step);
            context.lineTo(configKonva.width, configKonva.heightCenter - interval*factor*step);

            context.moveTo(0, configKonva.heightCenter + interval*factor*step);
            context.lineTo(configKonva.width, configKonva.heightCenter + interval*factor*step);
            step++;
          }
          context.closePath();

          context.fillStrokeShape(shape);
        },
        stroke: 'white',
        strokeWidth: 0.1
      }"></v-shape>
    </v-layer>
  </v-stage>
</template>

<script>

export default {

  data() {
    return {
      configKonva: {
        width: window.innerWidth,
        height: window.innerHeight,
        widthCenter: window.innerWidth/2,
        heightCenter: window.innerHeight/2,
      },
      G: 1000,
      dt: 7,
      radius: window.innerWidth > window.innerHeight ? window.innerHeight / 14 : window.innerWidth / 14,
      delta: window.innerHeight/2,
      conf1: {
        x: window.innerWidth/2+200,
        y: window.innerHeight/2-200,
        x0: window.innerWidth/2+130,
        y0: window.innerHeight/2-130,
        radius: window.innerWidth > window.innerHeight ? window.innerHeight / 14 : window.innerWidth / 14,
        fill: "white",
      },
      conf2: {
        x: window.innerWidth/2-200,
        y: window.innerHeight/2+200,
        x0: window.innerWidth/2-130,
        y0: window.innerHeight/2+130,
        radius: window.innerWidth > window.innerHeight ? window.innerHeight / 14 : window.innerWidth / 14,
        fill: "red",
      },
      circle1: {
        x: window.innerWidth/2+200,
        y: window.innerHeight/2-200,
        vx: 1,
        vy: 1,
      },
      circle2: {
        x: window.innerWidth/2-200,
        y: window.innerHeight/2+200,
        vx: 1,
        vy: -1,
      },
      factor: 1,
      hSize: '40px',
      pSize: '19px',
      anim: null,
      toPosition: false,
    };
  },

  watch:{
    factor(val, oldVal){
      this.hSize = val * 40 + 'px';
      this.pSize = val * 19 + 'px';
    }
  },

  methods: {
    acceleration(q1, q2, d) {
      return -this.G * (q2 - q1) * Math.pow(d, -3);
    },

    velocity(v, a) {
      return v + a*this.dt;
    },

    distance(vp) {
      return vp*this.dt;
    },

    transform(d) {
      if (d < this.delta) return d;
      else return 2*this.delta - Math.pow(this.delta, 2) / d;
    },

    retransform(l) {
      if (l < this.delta) return l;
      else return Math.pow(this.delta, 2) / (2*this.delta - l);
    },

    radiusTransform(d) {
      if (d < this.delta) return this.radius;
      else return this.radius * this.delta / d;
    },
    
    animation() {
      const d = Math.sqrt(Math.pow(this.circle1.x - this.circle2.x, 2) + Math.pow(this.circle1.y - this.circle2.y, 2));
      this.factor = this.transform(d)/d;
      const a1x = this.acceleration(this.circle2.x, this.circle1.x, d);
      const a1y = this.acceleration(this.circle2.y, this.circle1.y, d);
      const a2x = -a1x;
      const a2y = -a1y;

      const v1xp = this.toPosition ? (this.conf1.x0 - this.circle1.x) / 100 : this.velocity(this.circle1.vx, a1x);
      const v1yp = this.toPosition ? (this.conf1.y0 - this.circle1.y) / 100 : this.velocity(this.circle1.vy, a1y);
      const v2xp = this.toPosition ? (this.conf2.x0 - this.circle2.x) / 100 : this.velocity(this.circle2.vx, a2x);
      const v2yp = this.toPosition ? (this.conf2.y0 - this.circle2.y) / 100: this.velocity(this.circle2.vy, a2y);

      const dx1 = this.distance(v1xp);
      const dy1 = this.distance(v1yp);
      const dx2 = this.distance(v2xp);
      const dy2 = this.distance(v2yp);
      
      this.circle1.vx = v1xp;
      this.circle1.vy = v1yp;
      this.circle2.vx = v2xp;
      this.circle2.vy = v2yp;


      const cx = this.configKonva.width / 2;
      const cy = this.configKonva.height / 2;
      const d0x = this.circle1.x + (this.circle2.x - this.circle1.x) / 2;
      const d0y = this.circle1.y + (this.circle2.y - this.circle1.y) / 2;
      const Tx = cx - d0x;
      const Ty = cy - d0y;

      this.circle1.x += dx1 + Tx;
      this.circle1.y += dy1 + Ty;
      this.circle2.x += dx2 + Tx;
      this.circle2.y += dy2 + Ty;

      const dxl = (this.circle1.x - this.circle2.x) * this.transform(d)/d;
      const dyl = (this.circle1.y - this.circle2.y) * this.transform(d)/d;

      this.conf1.x = cx - dxl/2;
      this.conf1.y = cy - dyl/2;
      this.conf2.x = cx + dxl/2;
      this.conf2.y = cy + dyl/2;

      this.conf1.radius = this.radiusTransform(d);
      this.conf2.radius = this.radiusTransform(d);
      
      if (Math.abs(this.circle1.x - this.conf1.x0) < 10 && Math.abs(v1xp) < 0.001 && this.toPosition) clearInterval(this.anim);
    },

    toMenu() {
      this.toPosition = true;
    },
  },

  created() {
    this.anim = setInterval(this.animation, 50);
  }
}
</script>


<style scoped>

h1 {
  background-color: transparent;
  font-size: v-bind('hSize');
}

p {
  background-color: transparent;
  font-size: v-bind('pSize');
}

.header {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

</style>
