<script setup>
import ProfilePicture from "@/Components/ProfilePicture.vue";
</script>

<template>
  <div class="column">
    <div class="row CharacterMateriaRow">
      <div class="hdrColumnMain">
        <div class="row itemSelectionRow">
          <img />
          <p>Game Stats</p>
          <p>Materia Column</p>
        </div>
      </div>
      <div class="pageNameCol">Materia</div>
    </div>
    <div class="row descRow">
      <em>Materia Description placeholder</em>
    </div>
    <div class="row bodyRow">
      <div class="subcolumn">
        <div class="row materiaRow">Restore STAR STAR STAR</div>
        <div class="row materiaRow apRow">
          <p>AP:</p>
          <p>12345</p>
        </div>
        <div class="row materiaRow nxtLvlRow">
          <p>to next level:</p>
          <p>10000</p>
        </div>
        <div class="row subdivided">
          <div class="subcolumn abilityListColumn">
            <h3>Ability List</h3>
            <hr />
            <p>Cure</p>
            <p>Cure2</p>
            <p>Regen</p>
            <p>Cure3</p>
          </div>
          <div class="subcolumn equipListColumn">
            <h3>Equip Effect</h3>
            <hr />
            <p>Strength +01</p>
            <p>Magic -01</p>
            <p>Max HP +02%</p>
            <p>Max MP -02%</p>
          </div>
        </div>
      </div>
      <div class="subcolumn">Materia List Component (Unassigned)</div>
    </div>
  </div>
</template>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  height: 82.5vh;
  width: 65vw;
}

.subcolumn,
.CharacterMateriaRow,
.itemSelectionRow,
.descRow,
.bodyRow {
  border: 1px solid white;
}

.row {
  display: flex;
  flex-direction: row;
  margin-top: 0;
  margin-bottom: 0;
}

.itemSelectionRow {
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  height: 100%;
}

.CharacterMateriaRow {
  height: 15vh;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0%;
  padding-right: 0%;
}

.descRow,
.materiaRow {
  height: 7.5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.apRow,
.nxtLvlRow {
  justify-content: flex-end;
  padding-right: 5%;
  gap: 100px;
}

.pageNameCol {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-end;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 2.5rem;
  height: 100%;
  width: 15%;
}

.bodyRow {
  height: 65vh;
}

.materiaRow {
  height: 10vh;
}
.subcolumn {
  width: 35vw;
  display: flex;
  flex-direction: column;
}

.abilityListColumn,
.equipListColumn {
  height: 30vh;
}

.hdrColumnMain {
  width: 85%;
  height: 100%;
}
</style>
