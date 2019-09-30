<template>
  <q-page class="flex flex-center">
    <div class="row">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Set or transition color</div>
        </q-card-section>

        <q-separator />

        <q-toggle
          v-model="transition"
          label="Transition"
        />

        <q-separator />

        <q-card-actions align="around">
          <SetColor
            v-for="(color, id) of colors"
            :key="id"
            :red="color.r"
            :green="color.g"
            :blue="color.b"
            :transition="transition"
            class="q-ma-xs "
          />
        </q-card-actions>
      </q-card>
    </div>
    <div class="row">
      <q-card>
        <ChangeColor />
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import ChangeColor from 'components/ChangeColor';
import SetColor from 'components/SetColor';

export default {
  name: 'Color',
  components: { ChangeColor, SetColor },
  data () {
    return {
      transition: false,
    };
  },
  computed: {
    colors () {
      const colors = [];
      const c = [0, 150, 255];
      for (const r of c) {
        for (const g of c) {
          for (const b of c) {
            colors.push({ r, g, b });
          }
        }
      }
      return colors;
    },
  },
};
</script>
