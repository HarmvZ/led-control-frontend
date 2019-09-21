<template>
  <q-list bordered class="rounded-borders">
    <alarm-detail
      v-for="alarm in alarms"
      :key="alarm.pk"
      :alarm="alarm"
    />
  </q-list>
</template>

<style>
</style>

<script>
import AlarmDetail from 'components/alarm/AlarmDetail';

export default {
  name: 'AlarmList',
  components: { AlarmDetail },
  data () {
    return {
      alarms: [],
    };
  },
  methods: {
    syncAlarms () {
      const url = '/api/alarms/';
      const response = this.request({
        method: 'GET',
        url,
        responseType: 'json',
      });
      this.alarms = response;
    },
  },
  mounted () {
    this.syncAlarms();
  },
};
</script>
