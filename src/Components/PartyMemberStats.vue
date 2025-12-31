<script setup lang="ts">
import { ref, computed } from "vue";

const level = ref(8);

const hpMax = ref(4000);
const hpRemaining = ref(3000);

const mpMax = ref(333);
const mpRemaining = ref(111);

const hpWidth = computed(() => {
  const percentage = (hpRemaining.value / hpMax.value) * 100;
  return `${percentage}%`;
});

const mpWidth = computed(() => {
  const percentage = (mpRemaining.value / mpMax.value) * 100;
  return `${percentage}%`;
});
</script>

<template>
  <div class="column">
    <div class="row">
      <h3 class="characterName">Cloud</h3>
    </div>

    <div class="row">
      <h4 class="level"><b>LV</b></h4>
      <p>
        <b>{{ level }}</b>
      </p>
    </div>

    <div class="row">
      <h4 class="HP"><b>HP</b></h4>
      <p>
        <b>{{ hpRemaining }}/{{ hpMax }}</b>
      </p>
    </div>
    <hr class="hpLine" />

    <div class="row">
      <h4 class="MP"><b>MP</b></h4>
      <p>
        <b>{{ mpRemaining }}/{{ mpMax }}</b>
      </p>
    </div>
    <hr class="mpLine" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  background-color: transparent;
}
.column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: 2px;
}

.level,
.HP,
.MP {
  margin-right: 10px;
  color: lightskyblue;
}

hr {
  border: 0;
  border-radius: 5px;
  height: 3px;
}

.hpLine {
  width: v-bind(hpWidth);
  background-image: linear-gradient(to right, #7b7b7b, #b5b5b5);
}

.mpLine {
  width: v-bind(mpWidth);
  background-image: linear-gradient(to right, #006363, #00ffff);
}
p {
  font-size: medium;
}

h3,
h4,
p,
hr {
  margin: 0;
  font-size: 2rem;
}
</style>
