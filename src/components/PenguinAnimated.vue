/* eslint-disable no-undef */ /* eslint-disable prettier/prettier */
<template>
  <svg
    id="penguingSVG"
    :style="cssVars"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1080 1080"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
  >
    <defs>
      <linearGradient
        id="eAop8lcyPbJ3-fill"
        x1="-257.612000"
        y1="-93.768000"
        x2="257.622000"
        y2="93.761000"
        spreadMethod="pad"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          id="eAop8lcyPbJ3-fill-0"
          offset="55.200000%"
          stop-color="rgb(0,0,0)"
        />
        <stop
          id="eAop8lcyPbJ3-fill-1"
          offset="100%"
          stop-color="rgb(51,51,51)"
        />
      </linearGradient>
    </defs>
    <g id="penguin">
      <circle
        id="penguinCircle"
        r="274.080000"
        transform="matrix(1 0 0 1 523.30999999999995 563.53999999999996)"
        fill="url(#eAop8lcyPbJ3-fill)"
        stroke="none"
        stroke-width="1"
      />
      <path
        id="penguingPath1"
        d="M797.320000,552.370000L939.880000,625.410000C951.680000,631.460000,948.940000,649.060000,935.850000,651.230000L707.590000,688.980000C688.430000,692.150000,675,670.590000,686.290000,654.790000L751.530000,563.500000C761.920000,548.960000,781.410000,544.220000,797.320000,552.370000Z"
        fill="rgb(241,90,36)"
        stroke="none"
        stroke-width="1"
      />
      <path
        id="penguingPath2"
        d="M939.880000,625.420000C951.680000,631.470000,948.940000,649.070000,935.850000,651.240000L707.590000,688.990000C688.430000,692.160000,675,670.600000,686.290000,654.800000"
        opacity="0.15"
        fill="rgb(255,0,0)"
        stroke="none"
        stroke-width="1"
      />
    </g>
  </svg>
</template>
<script>
export default {
  name: "PenguinAnimated",
  props: {
      size: {
          default: '100%',
      },
  },
  computed: {
      cssVars() {
          return {
              '--size': this.size,
          }
      }
  }
};
</script>

<style scoped>
* {
  margin: -2%;
  padding: 0%;
  box-sizing: border-box;
}

svg {
    width: var(--size);
}

body {
  text-align: center;
}

#penguin {
  animation: penguin 1s infinite linear;
  transform-origin: 39.29% 50%;
  transform-box: fill-box;
}

@keyframes penguin {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
