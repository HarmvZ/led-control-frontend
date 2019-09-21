<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import request from 'src/mixins/request';

Vue.mixin(request);

export default {
  name: 'App',
};
</script>

<style>
</style>
