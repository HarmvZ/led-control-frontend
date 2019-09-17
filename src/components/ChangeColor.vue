<template>
  <div>
    <q-color v-model="color" format-model="rgb" inline no-header></q-color>
    <q-btn-group>
      <q-btn color="primary" label="Set" @click="changeColor()" />
      <q-btn color="primary" label="Transistion" @click="changeColor(transition=true)" />
    </q-btn-group>
  </div>
</template>

<style>
</style>

<script>
import request from '../mixins/request';
import getRGBColorObject from '../utils/getRGBColorObject';

export default {
  name: 'ChangeColor',
  mixins: [request],
  data () {
    return {
      color: null,
    };
  },
  methods: {
    changeColor (transition = false) {
      if (!this.color) {
        return;
      }
      const data = getRGBColorObject(this.color);
      let url = '/api/set_color/';
      if (transition) {
        url = '/api/transition_color/';
      }
      this.request({
        method: 'POST',
        url,
        data,
        responseType: 'json',
      });
    },
  },
};
</script>
