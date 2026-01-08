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
      I built this application to deepen my understanding of
      <span class="vue"><b>Vue.js</b>.</span>
      <br />
      I figured it would be a really fun experience to recreate the menu
      interface from one of my favorite games <span class="ff7"><b>FF7</b></span
      >.
    </p>
    <p>
      Overall, this was a great way to get my feet wet using
      <span class="pinia">Pinia</span> for global state management.<br />
      Understanding when to use <span class="pinia">global state</span> versus
      pass props down to child components versus when to emit events up the tree
      versus update a global state variable.
    </p>
    <p>
      It was also a good way to learn about
      <span class="vr">Vue Router</span> and where to place the router view. As
      well as how pages render off of <span class="vr">RouterLinks</span> within
      the <span class="vr">RenderView</span>.
    </p>
    <br />
    <p>Overall, a phenomenal experience!</p>
    <p><em>Thank you for trying out my app,</em> <br />Bill Lee</p>
    <p></p>
  </div>
</template>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 2.5%;
}

h1 {
  font-size: 3rem;
  margin: 1;
  margin-bottom: 1;
}
p {
  font-size: 2.5em;
  font-family: "Reactor7", sans-serif;
  width: 80%;
}

hr {
  margin: 0;
  width: 60vw;
  height: 5px;
  border: 0;
  background-color: white;
}

.vue,
.vr {
  color: rgb(65, 184, 131);
}

.pinia {
  color: #ffed29;
}

.ff7 {
  color: #aaa9ad;
}
</style>
