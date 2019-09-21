<template>
  <q-page class="flex flex-center">
    <alarm-list />
  </q-page>
</template>

<style>
</style>

<script>
import AlarmList from 'components/alarm/AlarmList';

export default {
  name: 'PageIndex',
  components: { AlarmList },
};
</script>
