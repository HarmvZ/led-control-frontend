<template>
  <q-page class="items-center q-px-md">
    <q-card class="col-12 bg-grey-9 text-center q-mt-md">
      <q-card-section class="bg-primary text-white">
        <div class="text-h5">Upcoming alarm</div>
      </q-card-section>

      <AlarmDetail
        v-if="alarm !== false"
        v-bind="alarm"
        :editable="false"
        style="margin-top: 0;"
      />
      <div v-else class="text-h6 justify-center q-pa-md">No upcoming alarms found!</div>
    </q-card>
    <q-card class="col-12 bg-grey-9 text-center q-mt-md">
      <q-card-section class="bg-primary text-white">
        <div class="text-h5">Change color</div>
      </q-card-section>
      <q-card-section>
        a
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
// import DarkCard from 'components/DarkCard';
import AlarmDetail from 'components/alarm/AlarmDetail';

export default {
  name: 'PageIndex',
  components: { AlarmDetail }, //, DarkCard },
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
