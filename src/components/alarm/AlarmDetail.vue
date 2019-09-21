<template>
  <q-item>
    <q-item-section top avatar>
      <q-icon name="alarm" />
    </q-item-section>
    <q-item-section top>
      <q-item-label lines="1">
        <span class="text-weight-medium">{{ alarm.name }}</span>
        <q-popup-edit v-model="alarm.name">
          <q-input v-model="alarm.name" dense autofocus />
        </q-popup-edit>
      </q-item-label>
      <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
        <span class="cursor-pointer">{{ alarm.hour }}:{{ alarm.minute }}</span>
      </q-item-label>
      <q-item-label caption lines="1">
        <q-btn-toggle
          v-model="alarm.day_of_week"
          toggle-color="primary"
          :options="dow_map"
        />
      </q-item-label>
    </q-item-section>
    <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-toggle
              v-model="alarm.enabled"
              icon="alarm"
            />
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
          </div>
    </q-item-section>
  </q-item>
</template>

<style>
</style>

<script>

export default {
  name: 'AlarmDetail',
  props: {
    alarm: {
      type: Object,
      default: () => { return {}; },
    },
  },
  data () {
    return {
      dow_map: [
        { value: '0', label: 'Sunday' },
        { value: '1', label: 'Monday' },
        { value: '2', label: 'Tuesday' },
        { value: '3', label: 'Wednesday' },
        { value: '4', label: 'Thursday' },
        { value: '5', label: 'Friday' },
        { value: '6', label: 'Saturday' },
      ],
    };
  },
  methods: {
    syncAlarm () {
      const url = `/api/alarm/${this.alarm.pk}`;
      const data = this.alarm;
      this.request({
        method: 'PATCH',
        url,
        data,
        responseType: 'json',
      });
    },
  },
};
</script>
