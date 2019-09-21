<template>
  <q-page class="flex flex-center">
    <show-animation />
    <show-clock />
  </q-page>
</template>

<style>
</style>

<script>
import ShowClock from 'components/ShowClock';
import ShowAnimation from 'components/ShowAnimation';

export default {
  name: 'Animation',
  components: { ShowClock, ShowAnimation },
};
</script>
