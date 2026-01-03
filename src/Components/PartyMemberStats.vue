<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  name: string;
  level: number;
  hpMax: number;
  hpRemaining: number;
  mpMax: number;
  mpRemaining: number;
}

const props = defineProps<Props>();

const hpWidth = computed(() => {
  const percentage: number = (props.hpRemaining / props.hpMax) * 100;
  return `${percentage}%`;
});

const mpWidth = computed(() => {
  const percentage: number = (props.mpRemaining / props.mpMax) * 100;
  return `${percentage}%`;
});
</script>

<template>
  <div class="column">
    <div class="row">
      <h3 class="characterName">{{ props.name }}</h3>
    </div>

    <div class="row">
      <h4 class="level"><b>LV</b></h4>
      <p>
        <b>{{ props.level }}</b>
      </p>
    </div>

    <div class="row">
      <h4 class="HP"><b>HP</b></h4>
      <p>
        <b>{{ props.hpRemaining }}/{{ props.hpMax }}</b>
      </p>
    </div>
    <hr class="hpLine" />

    <div class="row">
      <h4 class="MP"><b>MP</b></h4>
      <p>
        <b>{{ props.mpRemaining }}/{{ props.mpMax }}</b>
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
