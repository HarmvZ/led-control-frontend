<template>
  <div>
    <q-option-group
      v-model="animation"
      :options="options"
      color="primary"
    />
    <q-slider
      v-model="waitMs"
      :min="1"
      :max="500"
      :step="1"
      label
    />
    <q-btn-group>
      <q-btn color="primary" label="Show Animation" @click="showAnimation()" />
    </q-btn-group>
  </div>
</template>

<style>
</style>

<script>

export default {
  name: 'ShowAnimation',
  data () {
    return {
      waitMs: 20,
      animation: 'theaterChaseRainbow',
      options: [
        {
          label: 'Rainbow',
          value: 'rainbow',
        },
        {
          label: 'Rainbow Cycle',
          value: 'rainbowCycle',
        },
        {
          label: 'Theater Chase Rainbow',
          value: 'theaterChaseRainbow',
        },
      ],
    };
  },
  methods: {
    showAnimation () {
      const data = {
        'animation': this.animation,
        'wait_ms': this.waitMs,
      };
      let url = '/api/show_animation/';
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
