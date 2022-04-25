<template>
  <div class="header">
  <h1>GOIMAGINARY</h1>

  <p>just GO into the IMAGINARY world</p>
  </div>
  <v-stage class="stage" :config="configKonva">

    <v-layer>
      <v-circle :config="conf1"></v-circle>
      <v-circle :config="conf2"></v-circle>
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
      },
      G: 1000,
      dt: 7,
      radius: window.innerWidth > window.innerHeight ? window.innerHeight / 14 : window.innerWidth / 14,
      delta: window.innerHeight/2,
      conf1: {
        x: window.innerWidth/2+200,
        y: window.innerHeight/2-200,
        radius: window.innerWidth > window.innerHeight ? window.innerHeight / 14 : window.innerWidth / 14,
        fill: "red",
      },
      conf2: {
        x: window.innerWidth/2-200,
        y: window.innerHeight/2+200,
        radius: window.innerWidth > window.innerHeight ? window.innerHeight / 14 : window.innerWidth / 14,
        fill: "white",
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
      }
    };
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
      const a1x = this.acceleration(this.circle2.x, this.circle1.x, d);
      const a1y = this.acceleration(this.circle2.y, this.circle1.y, d);
      const a2x = -a1x;
      const a2y = -a1y;

      const v1xp = this.velocity(this.circle1.vx, a1x);
      const v1yp = this.velocity(this.circle1.vy, a1y);
      const v2xp = this.velocity(this.circle2.vx, a2x);
      const v2yp = this.velocity(this.circle2.vy, a2y);

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

    }
  },

  created() {
    const anim = setInterval(this.animation, 50);
  }
}
</script>


<style scoped>

h1 {
  background-color: transparent;
}

p {
  background-color: transparent;
}

.header {
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  z-index: 1;
}

</style>
