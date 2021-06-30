<template>
  <div class="text-center">
    <div id="loadingPage">
      <v-fade-transition>
        <v-overlay v-if="pageLoading" opacity="100" color="#B2DFDB">
          <div>
            <PenguinAnimated :size="'30%'" />
          </div>
          <div class="black--text">Penguins are mating</div>
        </v-overlay>
      </v-fade-transition>
    </div>

    <div class="home">
      <Header />
      <div class="content">
        <v-img src="../assets/logo.svg" width="200px"></v-img>
      </div>
      <div class="content2">
        <h1 class="white--text">two penguins</h1>
      </div>
    </div>
  </div>
</template>

<script>
import PenguinAnimated from "../components/PenguinAnimated.vue";
import Header from "../components/Header.vue";

export default {
  name: "Home",
  components: {
    PenguinAnimated,
    Header,
  },
  data() {
    return {
      pageLoading: true,
    };
  },
  async created() {
    await this.fakeLoading();
  },
  methods: {
    async sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },

    async fakeLoading() {
      await this.sleep(2000);
      this.pageLoading = false;
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  padding: 0%;
  margin: 0%;
  background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
}

.home h1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  text-shadow: aliceblue 2px 2px;
}

.header {
  height: 5%;
  background-color: transparent;
}

.content {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.content2 {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
}

.content2:hover {
  opacity: 100;
}
</style>
