<template>
  <q-page class="items-center q-px-md">
    <router-link to="/alarms">
      <UpcomingAlarm />
    </router-link>
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
import UpcomingAlarm from 'components/UpcomingAlarm';

export default {
  name: 'PageIndex',
  components: { UpcomingAlarm }, //, DarkCard },
  data () {
    return {
      alarm: false,
    };
  },
};
</script>
