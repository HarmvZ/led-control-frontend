<template>
  <q-page class="flex flex-center">
    <q-btn-group>
      <q-btn
        v-for="(color, id) of colors"
        :key="id"
        :style="btnStyle(color)"
        @click="changeColor(color)"
        label=" "
      />

    </q-btn-group>
    <ChangeColor />
  </q-page>
</template>

<style>
</style>

<script>
import ChangeColor from 'components/ChangeColor';

export default {
  name: 'Color',
  components: { ChangeColor },
  computed: {
    colors () {
      const colors = [];
      const c = [0, 5, 50, 100, 200, 255];
      for (const r of c) {
        for (const g of c) {
          for (const b of c) {
            colors.push({ r, g, b });
          }
        }
      }
      console.log(colors);
      return colors;
    },
  },
  methods: {
    changeColor (data) {
      const url = '/api/transition_color/';
      this.request({
        method: 'POST',
        url,
        data,
        responseType: 'json',
      });
    },
    btnStyle (color) {
      return `background-color: rgb(${color['r']},${color['g']},${color['b']});`;
    },
  },
};
</script>
