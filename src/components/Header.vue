<template>
  <div class="outer">
    <div id="header" class="header mt-2">
      <v-row align="center">
        <v-spacer />
        <v-col cols="auto" class="mx-4">
          <RatatouilleButton
            :size="'5%'"
            :hover="this.page != 'Ratatouille'"
            @click.native="goTo('Ratatouille')"
          />
        </v-col>
        <v-col cols="auto" class="mx-4">
          <HomeButton
            :size="'5%'"
            :hover="this.page != 'Home'"
            @click.native="goTo('/')"
          />
        </v-col>
        <v-col cols="auto" class="mx-4">
          <QuizButton
            :size="'5%'"
            :hover="this.page != 'Quiz'"
            @click.native="goTo('Quiz')"
          />
        </v-col>
        <v-spacer />
      </v-row>
    </div>
  </div>
</template>

<script>
import HomeButton from "../components/HomeButton.vue";
import QuizButton from "../components/QuizButton.vue";
import RatatouilleButton from "../components/RatatouilleButton.vue";

export default {
  name: "Header",
  props: {
    page: {
      default: "Home",
    },
  },
  components: {
    HomeButton,
    QuizButton,
    RatatouilleButton,
  },
  methods: {
    goTo(location) {
      this.$router.push({ path: location });
    },
  },
};
</script>

<style scoped>
.outer {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  text-shadow: aliceblue 2px 2px;
  background-color: transparent;
}

.header {
  height: 50px;
  background-color: transparent;
}
</style>
