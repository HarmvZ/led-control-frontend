<template>
    <q-btn
      :style="btnStyle()"
      @click="changeColor()"
      label=" "
    />
</template>

<style>
</style>

<script>
export default {
  name: 'SetColor',
  props: {
    red: Number,
    green: Number,
    blue: Number,
    transition: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    changeColor () {
      const data = { r: this.red, g: this.green, b: this.blue };
      const url = !this.transition ? '/api/set_color/' : '/api/transition_color/';
      this.request({
        method: 'POST',
        url,
        data,
        responseType: 'json',
      });
    },
    btnStyle () {
      return `background-color: rgb(${this.red},${this.green},${this.blue});`;
    },
  },
};
</script>
