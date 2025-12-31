<script setup lang="ts">
import { ref, computed } from "vue";
const title = ref("next level");

import type { Character } from "@/types/character";

const props = defineProps<{
  title: string;
  current: number;
  max: number;
}>();

const frontBarWidth = computed(() => {
  if (props.max === 0) return "0%";
  const percentage = Math.min((props.current / props.max) * 100, 100);
  return `${percentage}%`;
});
</script>

<template>
  <div class="column">
    <p>
      {{ props.title }}
    </p>
    <div class="ctnProgress">
      <hr class="hrBack" />
      <hr class="hrFront" />
    </div>
  </div>
</template>

<style scoped>
p {
  color: white;
  height: 1rem;
  margin: 0;
  font-size: 1.5rem;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 1;
}

.ctnProgress {
  position: relative;
  background-color: silver;

  margin-top: 5px;
  margin-left: 1rem;
  height: 25px;
  padding: 2px;
  overflow: hidden;
}

.hrBack,
.hrFront {
  position: absolute;
  top: 13%;
  left: 1.75%;
  width: 95%;
  margin: 0;
  border: none;
  height: 65%;
  /* border: 2px solid black; */
}

.hrBack {
  background-color: rgb(69, 64, 64);
  border: 2px solid #666;
  background: linear-gradient(to bottom, black 0%, grey 50%, darkgrey 100%);
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.8);
}
.hrFront {
  top: 24%;
  left: 2%;
  height: 60%;
  background: linear-gradient(
    to bottom,
    #ff69b4 0%,
    #ffc0cb 30%,
    white 50%,
    #ffc0cb 70%,
    #ff69b4 100%
  );

  width: v-bind(frontBarWidth);
}
</style>
