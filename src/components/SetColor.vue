<template>
  <div>
    <q-card-section class="row">
      <SetColorBtn
        v-for="(color, id) of colors"
        :key="id"
        :red="color.r"
        :green="color.g"
        :blue="color.b"
        :transition="transition"
        :timestep="timestep"
        :steps="steps"
        class="col-1"
      />
    </q-card-section>
    <div class="q-mb-md">
      <q-btn
        @click="options = !options"
        icon="build"
        round
        label=""
      />
    </div>
    <q-slide-transition>
      <div v-show="options">
        <q-toggle
          v-model="transition"
          label="Transition"
          dark
        />
        <div class="column">
          <div class="row items-center">
            <div class="col-2">Steps:</div>
            <q-slider
              v-model="steps"
              :min="1"
              :max="500"
              :step="1"
              label
              class="col-10"
            />
          </div>
          <div class="row items-center">
            <div class="col-2">Time per step(ms):</div>
            <q-slider
              v-model="timestep"
              :min="1"
              :max="500"
              :step="1"
              label
              class="col-10"
            />
          </div>
          <div class="text-center">Total duration: {{ steps * timestep / 1000 }} seconds </div>
        </div>
      </div>
    </q-slide-transition>
  </div>
</template>

<style>
</style>

<script>
import SetColorBtn from 'components/SetColorBtn';

export default {
  name: 'Color',
  components: { SetColorBtn },
  data () {
    return {
      options: false,
      transition: true,
      steps: 100,
      timestep: 20,
    };
  },
  computed: {
    colors () {
      const colors = [];
      const c = [0, 5, 50, 75, 150, 255];
      for (const r of c) {
        for (const g of c) {
          for (const b of c) {
            colors.push({ r, g, b });
          }
        }
      }
      return colors;
    },
  },
};
</script>
