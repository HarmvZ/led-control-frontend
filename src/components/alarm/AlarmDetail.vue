<template>
  <q-item class="col-12">
    <q-item-section class="column items-center">
      <q-item-label>
        <q-icon
          size="xl"
          :color="enabled ? 'primary' : 'grey-4'" name="alarm" />
      </q-item-label>
      <q-item-label lines="1">
        <span class="text-weight-medium text-h5">{{ name }}</span>
        <q-popup-edit v-if="editable" v-model="name">
          <q-input class="text-weight-medium text-h5" v-model="name" dense autofocus />
        </q-popup-edit>
      </q-item-label>
      <q-item-label
        @click="timeDialog = editable"
        lines="1"
        class="text-weight-bold text-primary text-uppercase"
      >
        <span class="cursor-pointer text-h3">{{ hour }}:{{ minute }}</span>
      </q-item-label>
      <q-item-label lines="1" class="text-center">
        <q-toggle
          v-model="alarm_enabled"
          icon="alarm"
          size="xl"
          :disable="!editable"
        />
        <q-btn
          v-if="editable"
          @click="confirmDelete = true"
          color="negative"
          flat
          size="s"
          icon="delete"
        />
      </q-item-label>
      <q-item-label
        caption
        class="q-gutter-xs"
      >
        <q-btn
          v-for="dow in dow_map"
          :key="dow.value"
          :clickable="editable"
          @click="toggleDow(dow.value)"
          :flat="!day_of_week.split(',').includes(dow.value)"
          :color="day_of_week.split(',').includes(dow.value) ? 'primary' : 'gray-6'"
          size="md"
          dense
        >
          {{ dow.label }}
        </q-btn>
      </q-item-label>
    </q-item-section>
    <q-dialog v-model="timeDialog">
        <q-time
          v-model="time"
          @input="timeChanged"
          format24h
        />
    </q-dialog>
    <q-dialog v-model="confirmDelete">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="negative" text-color="white" />
          <span class="q-ml-sm">Are you sure you want to remove "{{ name }}"?</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Ok" color="negative" v-close-popup @click="removeAlarm(pk)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-item>
</template>

<style>
</style>

<script>

export default {
  name: 'AlarmDetail',
  props: {
    pk: Number,
    name: String,
    hour: String,
    minute: String,
    enabled: Boolean,
    day_of_week: String,
    updateAlarm: Function,
    removeAlarm: Function,
    editable: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {
      dow_map: [
        { value: '1', label: 'Mon' },
        { value: '2', label: 'Tue' },
        { value: '3', label: 'Wed' },
        { value: '4', label: 'Thu' },
        { value: '5', label: 'Fri' },
        { value: '6', label: 'Sat' },
        { value: '0', label: 'Sun' },
      ],
      time: this.hour + ':' + this.minute,
      timeDialog: false,
      confirmDelete: false,
    };
  },
  computed: {
    alarm_name: {
      get () {
        return this.name;
      },
      set (name) {
        this.updateAlarm(this.pk, { name });
      },
    },
    alarm_enabled: {
      get () {
        return this.enabled;
      },
      set (enabled) {
        this.updateAlarm(this.pk, { enabled });
      },
    },
  },
  methods: {
    timeChanged (value) {
      this.timeDialog = false;
      const [hour, minute] = value.split(':');
      this.updateAlarm(this.pk, { hour, minute });
    },
    toggleDow (value) {
      if (!this.editable) {
        return;
      }
      let dow = this.day_of_week.split(',');
      if (dow.includes(value)) {
        dow = dow.filter((dow) => dow !== value);
        this.updateAlarm(this.pk, { day_of_week: dow.join(',') });
      } else {
        dow.push(value);
        this.updateAlarm(this.pk, { day_of_week: dow.join(',') });
      }
    },
  },
};
</script>
