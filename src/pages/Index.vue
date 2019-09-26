<template>
  <q-page class="flex flex-center">
    <div class="text-h5"> Upcoming alarm</div>
    <q-card class="row">
      <q-card-section>
        <AlarmDetail v-if="alarm !== false" v-bind="alarm" :editable="false" />
        <span v-else>No upcoming alarms found!</span>
      </q-card-section>
    </q-card>
    <q-card class="row">
      <q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import AlarmDetail from 'components/alarm/AlarmDetail';

export default {
  name: 'PageIndex',
  components: { AlarmDetail },
  data () {
    return {
      alarm: false,
    };
  },
  methods: {
    async getUpcomingAlarm () {
      const url = '/api/alarms/first_upcoming_alarm';
      const response = await this.request({
        method: 'GET',
        url,
        responseType: 'json',
      });
      return response;
    },
  },
  mounted () {
    this.getUpcomingAlarm().then(data => {
      this.alarm = data;
    });
  },
};
</script>
