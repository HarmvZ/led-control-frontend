<template>
  <div>
    <q-color dark format-model="rgb" inline no-header @change="changeColor"></q-color>
  </div>
</template>

<style>
</style>

<script>
import getRGBColorObject from 'src/utils/getRGBColorObject';

export default {
  name: 'ChangeColor',
  props: {
    transition: Boolean,
  },
  methods: {
    changeColor (value) {
      const data = getRGBColorObject(value);
      let url = '/api/set_color/';
      if (this.transition) {
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
