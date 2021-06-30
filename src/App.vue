<template>
  <div id="app">
    <v-app id="inspire" class="app">
      <v-main>
        <v-container class="fill-height ma-0 pa-0" fluid>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>

export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.footer {
  font-family: Arial, Helvetica, sans-serif;
  background-color: aqua;
  height: 25px;
  margin: 0%;
  width: 100%;
}

.app {
  background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
}

.header {
  background-color: transparent;
}
</style>
