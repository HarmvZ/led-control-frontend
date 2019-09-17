<template>
  <div>
    <q-color v-model="fg_color" format-model="rgb" inline no-header></q-color>
    <q-color v-model="bg_color" format-model="rgb" inline no-header></q-color>
    <q-btn-group>
      <q-btn color="primary" label="Show Clock" @click="showClock()" />
    </q-btn-group>
  </div>
</template>

<style>
</style>

<script>
import request from '../mixins/request';
import getRGBColorObject from '../utils/getRGBColorObject';

export default {
  name: 'ShowClock',
  mixins: [request],
  data () {
    return {
      fg_color: null,
      bg_color: null,
    };
  },
  methods: {
    showClock () {
      const data = {};
      if (this.fg_color) {
        data['fg'] = getRGBColorObject(this.fg_color);
      }
      if (this.bg_color) {
        data['bg'] = getRGBColorObject(this.bg_color);
      }
      let url = '/api/show_clock/';
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
