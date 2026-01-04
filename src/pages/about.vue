<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function redirectToAbout() {
  router.push("/about");
}
</script>

<template>
  <div class="column">
    <h1>About the App</h1>
    <hr />
    <p>
      This app is to elaborate on my understanding of Vue.js. <br />
      How to build out a component tree and emit events across the component
      tree.
    </p>
  </div>
</template>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
}

h1 {
  margin: 1;
  margin-bottom: 1;
}
p {
  font-family: "Reactor7", sans-serif;
  font-size: 1.5rem;
}

hr {
  margin: 0;
  width: 60vw;
  height: 5px;
  border: 0;
  background-color: white;
}
</style>
