<template>
  <div>
    <q-color v-model="color" format-model="rgb" inline no-header></q-color>
    <q-btn-group>
      <q-btn color="primary" label="Set" @click="setColor" />
      <q-btn color="primary" label="Transistion" @click="transitionColor" />
    </q-btn-group>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'SetColor',
  methods: {
    setColor () {
      alert(this.color);
    },
  },
};
</script>
