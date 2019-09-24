<template>
  <q-layout view="lHh Lpr lFf">
    <q-ajax-bar
      position="bottom"
      color="accent"
      size="2px"
    />
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          L
        </q-toolbar-title>

        <connection-status />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item clickable v-ripple to="/alarm">
          <q-item-section avatar>
            <q-icon name="alarm" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Alarm</q-item-label>
            <q-item-label caption>Configue alarm</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/color">
          <q-item-section avatar>
            <q-icon name="color_lens" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Color</q-item-label>
            <q-item-label caption>Set or transition to color</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/animation">
          <q-item-section avatar>
            <q-icon name="movie_filter" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Animation</q-item-label>
            <q-item-label caption>Play animation</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';
import ConnectionStatus from 'components/ConnectionStatus';

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
    };
  },
  methods: {
    openURL,
  },
  components: { ConnectionStatus },
};
</script>

<style>
</style>
