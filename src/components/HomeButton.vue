<template>
  <div class="outer" :style="cssVars">
    <div class="content">
      <v-img src="../assets/logo.svg" width="150px"></v-img>
    </div>
    <div class="content">
      <h1 class="white--text">HOME</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeButton",
  props: {
    size: {
      default: "100%",
    },
    hover: {
      default: true,
    },
  },
  computed: {
    cssVars() {
      return {
        "--size": this.size,
        "--hover": this.hover ? 0 : 100,
      };
    },
  },
};
</script>

<style scoped>
.outer {
  transform: scale(0.4);
  margin-left: 25px;
  margin-top: 13px;
}

.content {
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.content h1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  text-shadow: aliceblue 2px 2px;
}

.content:nth-child(2) {
  opacity: var(--hover);
}

.content:nth-child(2):hover {
  opacity: 100;
}
</style>
